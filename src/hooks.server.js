import { parse } from 'cookie';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
 
export async function handle({ event, resolve }) {
  const cookie = event.request.headers.get('cookie');
  if (cookie) {
    const { session } = parse(cookie);
    if (session) {
      const user1 = await db.select().from(user).where(eq(user.id, parseInt(session))).get();
      if (user1) {
        event.locals.user1 = user1;
        console.log('User found:', user1); // Přidáno logování
      } else {
        console.log('User not found');
      }
    } else {
      console.log('Session not found');
    }
  } else {
    console.log('Cookie not found');
  }
  return resolve(event);
}