<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-xl">
	{@render children()}
</main>
