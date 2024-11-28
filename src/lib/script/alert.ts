import { toast } from 'svelte-sonner';

export class Alert {
	static success(message: string) {
		toast.success(message);
	}

	static error(message: string) {
		toast.error(message);
	}

	static info(message: string) {
		toast.info(message);
	}

	static warning(message: string) {
		toast.warning(message);
	}
}

export class awaitAlert {
	static async success(message: string) {
		await toast.success(message);
	}

	static async error(message: string) {
		await toast.error(message);
	}

	static async info(message: string) {
		await toast.info(message);
	}

	static async warning(message: string) {
		await toast.warning(message);
	}
}
