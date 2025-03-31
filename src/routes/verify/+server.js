import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function GET({ url }) {
  const token = url.searchParams.get('token');
  console.log('Token from URL:', token); // Zde vypíšeš token z URL

  if (!token) {
    console.log('No token provided in URL');
    return new Response('Invalid token', { status: 400 });
  }

  try {
    const user1 = await db.select().from(user).where(user.token === token).get();
    console.log("User found:", user1);

    if (!user1) {
      console.log('No user found with provided token');
      return new Response('Invalid token', { status: 400 });
    }

    await db.update(user)
      .set({ is_email_verified: 1, token: null })
      .where(eq(user.id, user1.id))
      .run();

    console.log('Token verified successfully');
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/verify/success'
      }
    });
  } catch (error) {
    console.error('Verification error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
