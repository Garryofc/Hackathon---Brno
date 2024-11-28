/** @type {import('./$types').PageLoad} */

export const load = async ({ fetch }) => {
	var res: any = {};
	await fetch('/api/auth/check', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
		.then((res) => res.json())
		.then((data) => {
			res.status = data.status;
		});
	return res;
};
