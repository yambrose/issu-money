<script lang="ts">
    // Add your sidebar logic here
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
        width: 250px;
        height: 100vh;
        background-color: #f3f4f6;
        border-right: 1px solid #e5e7eb;
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
        color: #374151;
        font-weight: 500;
        transition: color 0.2s;
    }

    .sidebar a:hover {
        color: #2563eb;
    }
</style>
