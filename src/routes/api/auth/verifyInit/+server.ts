import { db } from '$lib/db.js';
import { sender } from '$lib/env/__e.js';

const rateLimitMap = new Map();

function isRateLimited(ip: any) {
	const currentTime = Date.now();
	const lastRequestTime = rateLimitMap.get(ip);
	if (lastRequestTime && currentTime - lastRequestTime < 60000) {
		return true;
	}

	rateLimitMap.set(ip, currentTime);
	return false;
}

export async function POST({ request }) {
	const body = await request.json();
	const ip =
		request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || 'unknown';

	if (isRateLimited(ip)) {
		return new Response(
			JSON.stringify({
				message: 'Too many requests. Please wait a moment and try again.',
				status: 429
			}),
			{
				status: 429,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	if (!body.email || !body.authToken) {
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
	} else {
		const verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase();

		try {
			sender.auto(
				`Dobrý den,\n\nZde je váš ověřovací kód: ${verificationCode}\n\nS pozdravem,\nTým Aivanna`,
				user.email,
				'Ověření účtu',
				'verifikace@aivanna.xyz'
			);

			await db.user.update({
				where: {
					email: user.email,
					userAuthToken: user.userAuthToken
				},
				data: {
					code: verificationCode
				}
			});

			return new Response(JSON.stringify({ message: 'Email with code was sent', status: 200 }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			});
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
