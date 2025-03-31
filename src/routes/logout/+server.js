import { serialize } from 'cookie';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function POST({ locals }) {
  // Pokud je uživatel přihlášen, nastavíme jeho isOnline na 0
  if (locals.user) {
    try {
      await db.update(user)
        .set({ isOnline: 0 })
        .where(eq(user.id, locals.user.id)) // Opravený přístup k uživatelskému ID
        .run();
    } catch (error) {
      console.error('Error while updating user status:', error);
      return new Response('Error updating user status', { status: 500 });
    }
  }

  // Odstranění cookie "session" (nastavení maxAge na -1 pro okamžité vypršení)
  const cookie = serialize('session', '', {
    httpOnly: true,
    maxAge: -1, // Okamžité vypršení cookie
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production', // Secure pouze v produkci
    path: '/' // Ujistíme se, že cookie bude zrušena na všech stránkách
  });

  // Vracíme odpověď s odstraněním cookie
  return new Response('Logout successful', {
    status: 200,
    headers: {
      'Set-Cookie': cookie
    }
  });
}
