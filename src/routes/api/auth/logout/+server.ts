export async function POST() {
    return new Response(
        JSON.stringify({ message: 'Logout successful', status: 200, redirect: '/' }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Set-Cookie': 'AuthToken=; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
            }
        }
    );
}
