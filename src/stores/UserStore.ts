import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const uid = writable("");
export const isAdmin = writable("");
export const accessToken = writable("");
// export const refreshToken = writable("");
export const studies = writable([]);
