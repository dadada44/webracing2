import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import bcrypt from 'bcryptjs';
import { eq, and } from 'drizzle-orm';
import { sql } from 'drizzle-orm';

export async function POST({ request }) {
	const formData = await request.formData();
	const newPassword = formData.get('newPassword');
	const token = formData.get('token');

	if (!newPassword || !token) {
		return new Response(
			JSON.stringify({ success: false, message: 'Missing password or token.' }),
			{ status: 400 }
		);
	}

	// Najdeme uživatele podle tokenu a ověříme, zda je token stále platný
	const user1 = await db
		.select()
		.from(user)
		.where(and(eq(user.token, token), sql`token_expires > CURRENT_TIMESTAMP`))
		.get();

	if (!user1) {
		return new Response(
			JSON.stringify({ success: false, message: 'Token is invalid or expired.' }),
			{ status: 400 }
		);
	}

	// Hash nové heslo
	const hashedPassword = await bcrypt.hash(newPassword, 10);

	// Uložíme nové heslo a odstraníme token
	await db
		.update(user)
		.set({
			password_hash: hashedPassword,
			token: null,
			token_expires: null,
		})
		.where(eq(user.id, user1.id))
		.run();

	return new Response(
		JSON.stringify({ success: true, message: 'Password changed successfully.' }),
		{ status: 200 }
	);
}
