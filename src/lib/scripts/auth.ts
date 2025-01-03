import { toast } from 'svelte-sonner';

var email_regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/;

export class Auth {
	static async login(loginData: any) {
		if (!loginData.email) {
			toast.error('Email cannot be empty!');
		} else if (!loginData.password) {
			toast.error('Password cannot be empty!');
		} else if (!email_regex.test(loginData.email)) {
			toast.error('Invalid email format! Supported format: alexmorgan@email.com');
		} else if (loginData.password.length < 8) {
			toast.error('Password must be longer than 8 characters!');
		} else {
			try {
				await fetch('/api/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include',
					body: JSON.stringify(loginData)
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.redirect) {
							location.href = data.redirect;
							if (data.message && data.status != 200) {
								toast.error(data.message);
							}
						} else if (data.status == 200 && data.message) {
							toast.success(data.message);
						} else {
							if (data.message) {
								toast.error(data.message);
							} else {
								toast.error('An unexpected error occurred.');
							}
						}
					});
			} catch (error) {
				console.error('Error during login:', error);
				toast.error('An unexpected error occurred.');
			}
		}
	}

	static async register(registerData: any) {
		if (
			!registerData.name ||
			!registerData.email ||
			!registerData.password ||
			!registerData.passwordConfirm
		) {
			toast.error('All fields are required!');
		} else if (registerData.name === '') {
			toast.error('Name cannot be empty!');
		} else if (registerData.email === '') {
			toast.error('Email cannot be empty!');
		} else if (registerData.password === '') {
			toast.error('Password cannot be empty!');
		} else if (registerData.passwordConfirm === '') {
			toast.error('Password confirmation cannot be empty!');
		} else if (!email_regex.test(registerData.email)) {
			toast.error('Invalid email format! Supported format: alexmorgan@email.com');
		} else if (registerData.password.length < 6) {
			toast.error('Password must be longer than 6 characters!');
		} else if (registerData.password !== registerData.passwordConfirm) {
			toast.error('Passwords do not match!');
		} else {
			try {
				await fetch('/api/auth/registration', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include',
					body: JSON.stringify(registerData)
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.redirect) {
							location.href = data.redirect;
							if (data.message && data.status != 200) {
								toast.error(data.message);
							}
						} else if (data.status == 200 && data.message) {
							toast.success(data.message);
						} else {
							if (data.message) {
								toast.error(data.message);
							} else {
								toast.error('An unexpected error occurred.');
							}
						}
					});
			} catch (error) {
				console.error('Error during registration:', error);
				toast.error('An unexpected error occurred.');
			}
		}
	}

	static async check() {
		await fetch('/api/auth/check', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status != 200) {
					if (data.redirect) {
						location.href = data.redirect;
					} else {
						location.href = '/';
					}
				}
			});
	}

	static async verificationinit() {
		const params = new URLSearchParams(window.location.search);
		const email = params.get('email');
		const authToken = params.get('token');
		if (!email || !authToken) {
			toast.error('Invalid verification link!');
			return;
		}

		await fetch('/api/auth/verifyInit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ email, authToken })
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status != 200) {
					toast.error(data.message);
					if (data.redirect) {
						location.href = data.redirect;
					}
				} else {
					toast.success(data.message);
					if (data.redirect) {
						location.href = data.redirect;
					}
				}
			});
	}

	static async verify(code: string) {
		const params = new URLSearchParams(window.location.search);
		const email = params.get('email');
		const authToken = params.get('token');
		if (!email || !authToken || !code) {
			toast.error('Code is required!');
			return;
		} else if (code.length != 6) {
			toast.error('Invalid code!');
			return;
		}

		await fetch('/api/auth/verify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ email, authToken, code })
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status != 200) {
					toast.error(data.message);
					if (data.redirect) {
						location.href = data.redirect;
					}
				} else {
					toast.success(data.message);
					if (data.redirect) {
						location.href = data.redirect;
					}
				}
			});
	}

	static async logout() {
		try {
			await fetch('/api/auth/logout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.status === 200) {
						toast.success(data.message);
						if (data.redirect) {
							location.href = data.redirect; // Redirect to the login or homepage
						}
					} else {
						toast.error(data.message || 'Logout failed.');
					}
				});
		} catch (error) {
			console.error('Error during logout:', error);
			toast.error('An unexpected error occurred during logout.');
		}
	}
}
