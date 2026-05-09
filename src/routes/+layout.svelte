<script lang="ts">
	import '../index.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app-container">
	<div class="content">
		{@render children()}
	</div>
	<Navbar />
</div>

<style>

</style>