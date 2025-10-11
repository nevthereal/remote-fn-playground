<script lang="ts">
	import { updateArticle } from '../routes/articles.remote';
	import type { Article } from './server/db/schema';

	let { article }: { article: Article } = $props();

	let edit = $state(false);
</script>

<div class="flex justify-between gap-2">
	{#if !edit}
		<li>{article.title} - {article.author}</li>
	{:else}
		<form
			class="w-full"
			{...updateArticle.for(article.id).enhance(async ({ submit }) => {
				await submit();
				edit = false;
			})}
		>
			<input
				type="text"
				name="title"
				defaultValue={article.title}
				class="w-full rounded-lg p-2 ring"
			/>
		</form>
	{/if}

	<button class="rounded-lg bg-blue-400 p-2" onclick={() => (edit = !edit)}>Edit</button>
</div>
