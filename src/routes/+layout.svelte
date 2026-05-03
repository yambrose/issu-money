<script lang="ts">
	import '../index.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app-container">
	<Sidebar />
	{@render children()}
</div>

<style>
	.app-container {
		display: flex;
		height: 100dvh;
	}
</style>