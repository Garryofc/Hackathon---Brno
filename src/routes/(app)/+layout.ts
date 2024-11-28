/** @type {import('./$types').PageLoad} */
import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	await fetch('/api/auth/check', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.status == 200) {
				redirect(302, '/app');
			}
		});
};
