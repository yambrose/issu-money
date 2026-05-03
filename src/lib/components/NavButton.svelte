<script lang="ts">
    import { page } from "$app/state";
    import type { Component } from 'svelte';

    interface Props {
        href: string;
        icon: Component;
        iconProps?: Record<string, unknown>;
        label: string;
        bottom?: boolean;
    }
    let { href, icon: Icon, iconProps = {}, label, bottom }: Props = $props();
    const isActive = $derived(page.url.pathname === href);
</script>


<a href={href} class="nav-button" class:active={isActive} class:bottom={bottom}>
    <span class="icon">
        <Icon {...iconProps} stroke="currentColor" />
    </span>
    <span class="label">{label}</span>
</a>

<style>
    .bottom {
        margin-top: auto;
    }
</style>