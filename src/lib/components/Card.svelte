<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		title?: string;
		icon: Component | null;
		iconProps?: Record<string, unknown>;
		description?: string;
	}

	let {title="", description="", icon: Icon = null, iconProps = {}}: Props = $props();
</script>

<div class="card">
	<span class="title" class:hidden={title===""}>{title}</span>
	<div class="icon" class:hidden={Icon===null}>
		<Icon {...iconProps} stroke="currentColor" />
	</div>
	<p class="description" class:hidden={description===""}>{description}</p>
</div>

<style>
	.hidden {
			display: none;
	}

	.card {
			color: var(--color-background);
			background: var(--color-interact-tertiary);
			border-radius: 0.5rem;
			padding: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
	}

	.card:hover {
			background: var(--color-interact-primary);
			color: var(--color-navbar);
			cursor: pointer;
	}
</style>