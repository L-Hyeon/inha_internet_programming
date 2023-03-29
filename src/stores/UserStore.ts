import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const email = writable("");
export const nickname = writable("");
export const accessToken = writable("");
export const refreshToken = writable("");
