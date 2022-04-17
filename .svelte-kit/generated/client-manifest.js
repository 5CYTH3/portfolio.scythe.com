export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\whoami.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"whoami": [[0, 3], [1]]
};