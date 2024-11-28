import { db } from '$lib/db.js';
import bcrypt from 'bcrypt';

function tokengen() {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let token = '';
	for (let i = 0; i < 50; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		token += characters[randomIndex];
	}
	return token;
}

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
		var userAuthToken = tokengen();

		const passwordHash = await bcrypt.hash(body.password, 10);

		await db.user.create({
			data: {
				email: body.email,
				passwordHash: passwordHash,
				userAuthToken: userAuthToken
			}
		});

		return new Response(
			JSON.stringify({
				message: 'User created',
				status: 200,
				redirect: `/verify?email=${body.email}&token=${userAuthToken}`
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} else {
		return new Response(
			JSON.stringify({
				message: 'User with this email already exists',
				status: 401,
				redirect: '/'
			}),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
}
