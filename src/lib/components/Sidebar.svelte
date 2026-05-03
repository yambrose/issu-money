<script lang="ts">
</script>

<aside class="sidebar">
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/settings">Settings</a></li>
        </ul>
    </nav>
</aside>

<style>
    .sidebar {
        width: 7.5rem;
        height: 100dvh;
        background-color: var(--color-navbar);
        border-right: 1px solid var(--color-interact-secondary);
        padding: 1.5rem;
        box-sizing: border-box;
    }

    .sidebar ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .sidebar a {
        text-decoration: none;
        color: var(--color-text-secondary);
        font-weight: 500;
        transition: color 0.2s;
    }

    .sidebar a:hover {
        color: var(--color-interact-primary);
    }
</style>
