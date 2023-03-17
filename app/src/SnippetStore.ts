import { writable, get } from 'svelte/store';

// SnippetStore
// Code Snippet
// Title, Code, Language, Favourite
export const snippetStore = writable<CodeSnippet[]>([]);
// addSnippet
export function addSnippet(input: CodeSnippetInput) {
	const snippets = get(snippetStore);
	snippetStore.update(() => {
		return [{ ...input, favourite: false }, ...snippets];
	});
}
// deleteSnippet
export function deleteSnippet(index: number) {
	const snippets = get(snippetStore);
	snippets.splice(index, 1);
	snippetStore.update(() => {
		return snippets;
	});
}
// toggleFavourite
export function toggleFavourite(index: number) {
	const snippets = get(snippetStore);

	snippetStore.update(() => {
		return snippets.map((snippet, snippetIndex) => {
			if (snippetIndex === index) {
				return { ...snippet, favourite: !snippet.favourite };
			}
			return snippet;
		});
	});
}
