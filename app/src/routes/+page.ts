import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippets: [
			{
				title: 'Cooper Codes Snippet',
				language: 'html',
				code: `<div>This is a div</div>`,
				favourite: false
			},
			{
				title: 'Cool Codes Snippet',
				language: 'typescript',
				code: `console.log("Subscribe");`,
				favourite: false
			}
		]
	};
}) satisfies PageLoad;
