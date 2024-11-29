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
		include: {
			accounts: true
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
		var accounts = user.accounts.map((acc: any) => {
			return {
				id: acc.id,
				facebookID: acc.facebookID,
				userID: acc.userID,
				accountName: acc.accountName,
				accountType: acc.accountType,
				user: acc.user
			};
		});

		return new Response(JSON.stringify({ status: 200, accounts }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
