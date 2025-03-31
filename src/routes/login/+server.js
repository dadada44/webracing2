import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { eq } from 'drizzle-orm';

export async function POST({ request }) {
  const formData = await request.formData();
  const nickname = formData.get('nickname');
  const password = formData.get('password');
  const rememberMe = formData.get('rememberMe') === 'true'; // Získání hodnoty pro "Zapamatovat si mě"


  if (!nickname || !password) {
    return new Response(JSON.stringify({ success: false, message: 'Invalid input' }), { status: 400 });
  }
  console.log("formData");
  try {
    const user1 = await db.select().from(user).where(eq(user.nickname, nickname)).get();

    if (!user1) {
      return new Response(JSON.stringify({ success: false, message: 'User1 not found' }), { status: 404 });
    }
    
    const valid = await bcrypt.compare(password, user1.password_hash);

    if (!valid) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid password' }), { status: 401 });
    }

    if (user1.is_email_verified !== 1) {
      return new Response(JSON.stringify({ success: false, message: 'Please verify your email before logging in.' }), { status: 403 });
    }
    console.log("Funguje");
    await db.update(user)
      .set({ is_online: 1 })
      .where(eq(user.id, user1.id))
      .run();

    // Pokud je zvoleno "Remember Me", nastavíme maxAge na 30 dní, jinak necháme session cookie
    const cookieOptions = rememberMe
      ? {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 365, // 30 dní
          sameSite: 'strict', // Nastavíme správný typ
          secure: true,
          path: '/'
        }
      : {
          httpOnly: true,
          sameSite: 'strict', // Session cookie bez maxAge
          secure: true,
          path: '/'
        };

    const cookie = serialize('session', user1.id.toString(), cookieOptions); // Nastavíme cookie
        console.log(cookie)
    return new Response(JSON.stringify({ success: true, message: 'Login successful' }), {
      status: 200,
      headers: {
        'Set-Cookie': cookie
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
  }
}
