<script lang="ts">
	import { getArticles, newArticle } from './articles.remote';
</script>

<h1 class="mb-4 text-3xl font-bold">Remote functions example</h1>

<form
	class="my-4"
	{...newArticle.enhance(async ({ submit }) => {
		submit().updates(getArticles());
	})}
>
	<input class="rounded-lg p-2 ring" type="text" name="title" />
	<button class="ml-2 rounded-lg bg-amber-500 p-2">Add Article</button>
</form>

<h2 class="mb-2 text-xl font-bold">Articles:</h2>
<svelte:boundary>
	{#snippet pending()}
		<p class="font-mono italic">Loading posts...</p>
	{/snippet}
	<ul>
		{#each await getArticles() as article}
			<li>{article.title}</li>
		{:else}
			<li>No posts...</li>
		{/each}
	</ul>
</svelte:boundary>
