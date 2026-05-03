<script lang="ts">
	import NavButton from "./NavButton.svelte";
</script>

<aside class="sidebar">
    <nav>
        <h1>John Pork</h1>
        <ul>
            <li><NavButton href="/" icon="🏠" label="Home" /></li>
            <li><NavButton href="/about" icon="ℹ️" label="About" /></li>
            <li><NavButton href="/contact" icon="📞" label="Contact" /></li>
        </ul>
    </nav>
</aside>

<style>
    h1 {
        font-size: var(--text-size-md);
    }

    .sidebar {
        width: 5rem;
        height: 100dvh;
        background-color: var(--color-navbar);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .sidebar ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

</style>
