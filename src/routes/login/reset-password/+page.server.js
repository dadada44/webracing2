import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user1) {
		throw error(404, {
			message: 'User not found',
		});
	}

	const User1 = await db
		.select()
		.from(user)
		.where(eq(user.id, locals.user1.id))
		.get();

	if (!User1) {
		throw error(404, {
			message: 'User not found',
		});
	}

	return {
		props: {
			User1: {
				id: User1.id,
				nickname: User1.nickname,
				datum_nar: User1.datum_nar,
				email: User1.email,
				token: User1.token,
			},
		},
	};
}
