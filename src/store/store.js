import { writable } from "svelte/store";

export const createCommunity = writable({
	isOpen: false,
});
