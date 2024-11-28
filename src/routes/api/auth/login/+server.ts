import { db } from '$lib/db.js';
import bcrypt from 'bcrypt';

var email_regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/;

export async function POST({ request }) {
	const body = await request.json();

	if (!body.email || !body.password) {
		return new Response(
			JSON.stringify({ message: 'Email and password are required', status: 401 }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	body.email = body.email.replace(/\s/g, '');

	if (!email_regex.test(body.email)) {
		return new Response(
			JSON.stringify({ message: 'Email does not match format xxx@xxx.xx', status: 401 }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	if (body.password.length < 8) {
		return new Response(
			JSON.stringify({ message: 'Password must be at least 8 characters long', status: 401 }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	const user = await db.user.findUnique({
		where: { email: body.email }
	});

	if (!user) {
		return new Response(JSON.stringify({ message: 'User not found', status: 401 }), {
			status: 401,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	const validation = await bcrypt.compare(body.password, user.passwordHash);

	if (!validation) {
		return new Response(JSON.stringify({ message: 'Invalid password', status: 401 }), {
			status: 401,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} else {
		const expires = new Date();
		expires.setDate(expires.getDate() + 7);

		return new Response(JSON.stringify({ message: 'Login success', status: 200 }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Set-Cookie': `token=${user.userAuthToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${expires.toUTCString()}`
			}
		});
	}
}
