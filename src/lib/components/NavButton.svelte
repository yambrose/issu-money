<script lang="ts">
    import { page } from "$app/state";
    import type { Component } from 'svelte';

    interface Props {
        href: string;
        icon: Component;
        iconProps?: Record<string, unknown>;
        label: string;
    }
    let { href, icon: Icon, iconProps = {}, label }: Props = $props();
    const isActive = $derived(page.url.pathname === href);
</script>


<a href={href} class="nav-button" class:active={isActive}>
    <span class="icon">
        <Icon {...iconProps} stroke="currentColor" />
    </span>
    <span class="label">{label}</span>
</a>

<style>
    .nav-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color-text-secondary);
        font-weight: 500;
        cursor: pointer;
        width: 100%;
        aspect-ratio: 1/1;
        border: none;
        border-radius: 0.5rem 0 0 0.5rem;
    }

    .label {
        font-size: var(--text-size-sm);
        text-transform: uppercase;
        font-weight: bold;
    }

    .nav-button.active {
        background: var(--color-background) !important;
    }

    .nav-button:hover {
        background: var(--color-interact-secondary);
        color: var(--color-interact-primary);
    }
</style>