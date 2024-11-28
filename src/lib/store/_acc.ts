import { writable } from 'svelte/store';

type fbAcc = {
	accName: string;
	id: string;
	email: string;
	fbToken: string;
};
type fbAccArray = fbAcc[];

export const addFb = writable<boolean>(true);
export const _fbAcc = writable<fbAccArray>([]);
