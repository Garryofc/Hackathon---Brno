import { writable } from 'svelte/store';

type fbAcc = {
	id: string;
	facebookID: string;
	userID: string;
	accountName: string;
	accountType: String;
	user: any;
};
type fbAccArray = fbAcc[];

export const addFb = writable<boolean>(false);
export const _fbAcc = writable<fbAccArray>([]);
