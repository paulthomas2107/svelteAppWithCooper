<script lang="ts">
	import CodeSnippetCard from '../CodeSnippetCard.svelte';

	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	// createSnippet(input : CodeSnippetInput)

	// Snippet Store - local writable stores snippets
	// Create / delete snippets
	// Favourite Snippets
	// +page.ts to mimic DB and load in examples
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create A Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input
					class="input"
					type="text"
					placeholder="Enter Title Here..."
					bind:value={formData.title}
				/>
			</label>
			<label class="label">
				<span>Programmimg Language</span>
				<select class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="typescript">TypeScript</option>
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter your snippet code here..."
					bind:value={formData.code}
				/>
			</label>
		</div>
		<div class="text-center py-6">
			<h2>My Code Snippets</h2>
		</div>
		<CodeSnippetCard />
	</div>
</div>
