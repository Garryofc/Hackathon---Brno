import { toast } from "svelte-sonner";

var email_regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/;
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
        if () {


        }
        if (!email_regex.test(registerData.email)) {
            toast.error("Invalid email format!")
            return
        } else  if(registerData.password != registerData.confirmPassword)
        {
            toast.error("Passwords do not match!")
            return
        }
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
