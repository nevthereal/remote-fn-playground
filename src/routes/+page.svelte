<script lang="ts">
	import Article from '$lib/Article.svelte';
	import { getArticles, newArticle } from './articles.remote';
</script>

<h1 class="mb-4 text-3xl font-bold">Remote functions example</h1>

<form
	class="my-4"
	{...newArticle.enhance(async ({ submit }) => {
		submit().updates(getArticles());
	})}
>
	<input class="rounded-lg p-2 ring" type="text" placeholder="Title" name="title" />
	<input class="rounded-lg p-2 ring" type="text" placeholder="Author" name="author" />
	<button class="ml-2 rounded-lg bg-amber-500 p-2">Add Article</button>
</form>

<h2 class="mb-2 text-xl font-bold">Articles:</h2>
<svelte:boundary>
	{#snippet pending()}
		<p class="font-mono italic">Loading posts...</p>
	{/snippet}
	<ul class="space-y-2">
		{#each await getArticles() as article (article.id)}
			<Article {article} />
		{:else}
			<li>No posts...</li>
		{/each}
	</ul>
</svelte:boundary>
