import { db } from '$lib/db.js';

export async function GET({ request }) {
	var cookies = request.headers.get('Cookie');
	if (!cookies) {
		return new Response(
			JSON.stringify({ message: 'No token provided', status: 401, redirect: '/' }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	var session = cookies.split('AuthToken=')[1]?.split(';')[0];

	if (!session) {
		return new Response(
			JSON.stringify({ message: 'No token provided', status: 401, redirect: '/' }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	const user = await db.user.findFirst({
		select: {
			id: true,
			verified: true
		},
		where: {
			userAuthToken: session
		}
	});

	if (!user) {
		return new Response(JSON.stringify({ message: 'Invalid token', status: 401, redirect: '/' }), {
			status: 401,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} else if (user.verified == false) {
		return new Response(
			JSON.stringify({ message: 'Email not verified', status: 401, redirect: '/' }),
			{
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} else {
		return new Response(JSON.stringify({ status: 200 }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
