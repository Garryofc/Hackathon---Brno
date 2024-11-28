import { db } from '$lib/db.js';

export async function GET({ request }) {
	var cookies = request.headers.get('Cookie');
	var session = cookies?.split('userAuthToken=')[1].split(';')[0];

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
			id: true
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
	}

	return new Response(JSON.stringify({ status: 200 }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
