<script>
    import { page } from "$app/state";

    let { href, icon, label } = $props();
    const isActive = $derived(page.url.pathname === href);
</script>


<a href={href} class="nav-button" class:active={isActive}>
    <span class="icon">{icon}</span>
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
        border-radius: 1rem 0 0 1rem;
    }

    .label {
        font-size: var(--text-size-sm);
        text-transform: uppercase;
        font-weight: bold;
    }

    .nav-button.active {
        color: var(--color-navbar);
        background: var(--color-background);
    }
</style>