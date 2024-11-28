export class Auth {
    static async login() {

	}

    static async register(registerData: any) {
        try {
            const response = await fetch('/api/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(registerData)
            });

            const data = await response.json();

            if (data.redirect) {
                location.href = data.redirect;
            } else {
                console.error(data.message);
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An unexpected error occurred.');
        }
    }

    static check() {
        console.log('check');
    }

    static logout() {
        console.log('logout');
    }
}
