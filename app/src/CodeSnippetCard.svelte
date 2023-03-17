<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { deleteSnippet, toggleFavourite } from './SnippetStore';

	export let snippet: CodeSnippet = {
		title: '',
		language: '',
		code: '',
		favourite: false
	};
	export let index: number;
</script>

<div class="header">
	<header class="card-header">
		{snippet.title}
		<div class="float-right">
			<button
				type="button"
				class="btn btn-sm variant-filled-secondary"
				on:click={() => toggleFavourite(index)}
				>{snippet.favourite ? 'Unfavorite' : 'Favorite'}</button
			>
			<button
				type="button"
				class="btn btn-sm variant-filled-error"
				on:click={() => deleteSnippet(index)}>X</button
			>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={snippet.language} code={snippet.code} />
	</section>
</div>
