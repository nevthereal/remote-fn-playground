<script lang="ts">
	import { getArticles } from './articles.remote';
</script>

<h1>Remote functions example</h1>

<h2>Posts:</h2>
<svelte:boundary>
	{#snippet pending()}
		<p class="font-mono italic">Loading posts...</p>
	{/snippet}
	<ul>
		{#each await getArticles() as article}
			<li>{article.title}</li>
		{/each}
	</ul>
</svelte:boundary>

<form action=""></form>
