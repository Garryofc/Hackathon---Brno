import { toast } from "svelte-sonner";


export class Auth {
    static async login(loginData: any) {
		try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (data.redirect) {
                location.href = data.redirect;
            } else {
                console.error(data.message);
                toast.error(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An unexpected error occurred.');
        }
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
                toast.error(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('An unexpected error occurred.');
        }
    }

    static check() {
        console.log('check');
    }

    static logout() {
        console.log('logout');
    }
}
