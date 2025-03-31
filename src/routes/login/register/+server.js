import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '$lib/server/resend';
import { eq } from 'drizzle-orm';
import { BASE_URL } from '$env/static/private';

export async function POST({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const nickname = formData.get('nickname');
    const password = formData.get('password');
    const jmeno = formData.get('jmeno');
    const prijmeni = formData.get('prijmeni');

    const profile_image = 'https://example.com/default-profile.png'; // Výchozí obrázek

    // Kontrola vstupních dat
    if (!email || !nickname || !password || !jmeno || !prijmeni) {
        return new Response(JSON.stringify({ success: false, message: 'All fields are required.' }), { status: 400 });
    }

    try {
        // Kontrola, jestli uživatel existuje
        const existingUserByEmail = await db.select().from(user).where(eq(user.email, email)).first();
        const existingUserByNickname = await db.select().from(user).where(eq(user.nickname, nickname)).first();

        if (existingUserByEmail) {
            return new Response(JSON.stringify({ success: false, message: 'Email already exists.' }), { status: 409 });
        }

        if (existingUserByNickname) {
            return new Response(JSON.stringify({ success: false, message: 'Nickname already exists.' }), { status: 409 });
        }

        // Hashování hesla
        const passwordHash = await bcrypt.hash(password, 10);

        // Generování tokenu
        const token = Math.random().toString(36).substring(2);
        const tokenExpires = new Date(Date.now() + 3600000).toISOString(); // Token vyprší za 1 hodinu

        // Uložení uživatele
        await db.insert(user).values({
            email,
            nickname,
            jmeno,
            prijmeni,
            password_hash: passwordHash,
            token,
            token_expires: tokenExpires,
            is_email_verified: 0,
            is_online: 0,
            created_at: new Date().toISOString(),
            update_at: new Date().toISOString(),
            profile_image,
        }).run();

        // Odeslání verifikačního emailu
        await sendVerificationEmail(email, nickname, token);

        return new Response(JSON.stringify({
            success: true,
            message: 'Registration successful. Check your email to verify your account.',
        }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: 'Registration failed. Try again.' }), { status: 500 });
    }
}
