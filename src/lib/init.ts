import { db } from '$lib/db.js';

function generateSession(length: number = 50) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$?!=&';
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export class sessionsManager {
	static async init() {}

	static async createSession(id: string) {
		var session = generateSession();
		await db.user.update({
			where: { id },
			data: {
				lastSession: session
			}
		});
		return session;
	}

	static async checkSession(authSession: string, authToken: string) {
		const user = await db.user.findFirst({
			where: {
				lastSession: authSession,
				authToken: authToken
			}
		});
		if (user) {
			return user;
		} else {
			return false;
		}
	}

	static async updateSession(id: string) {
		var session = generateSession();
		await db.user.update({
			where: { id },
			data: {
				lastSession: session
			}
		});
		return session;
	}
}
