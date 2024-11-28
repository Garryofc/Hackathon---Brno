import { db } from '$lib/db.js';
import { sender } from '$lib/env/__e.js';

export async function POST({ request }) {
	const body = await request.json();
	const expires = new Date();
	expires.setDate(expires.getDate() + 7);

	if (!body.email || !body.authToken || !body.code) {
		return new Response(
			JSON.stringify({ message: 'Email and password are required', status: 401 }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} else if (body.code.length != 6) {
		return new Response(
			JSON.stringify({ message: 'Verification code must be 6 characters long', status: 401 }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	const user = await db.user.findUnique({
		where: {
			email: body.email,
			userAuthToken: body.authToken
		}
	});

	if (!user) {
		return new Response(JSON.stringify({ message: 'Verification token is expired', status: 401 }), {
			status: 401,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} else if (user.verified == true) {
		return new Response(
			JSON.stringify({ message: 'User is already verified', status: 401, redirect: '/' }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} else if (user.code != body.code) {
		return new Response(JSON.stringify({ message: 'Verification code is invalid', status: 401 }), {
			status: 401,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} else {
		try {
			await db.user.update({
				where: {
					email: user.email,
					userAuthToken: user.userAuthToken
				},
				data: {
					verified: true
				}
			});

			return new Response(
				JSON.stringify({
					message: `You have been successfully verified`,
					status: 200,
					redirect: '/app'
				}),
				{
					status: 200,
					headers: {
						'Content-Type': 'application/json',
						'Set-Cookie': `AuthToken=${user.userAuthToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${expires.toUTCString()}`
					}
				}
			);
		} catch (error) {
			console.error('Error during verification:', error);
			return new Response(
				JSON.stringify({ message: 'An unexpected error occurred.', status: 500 }),
				{
					status: 500,
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
		}
	}
}
