import { writable } from 'svelte/store'

export const dark  = writable(true);
export const title = writable("");
export const path = writable("/home/scythe");