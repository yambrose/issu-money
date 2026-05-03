<script>
    let { href, icon, label } = $props();
</script>


<a href={href}>
    <button class="nav-button">
        <span class="icon">{icon}</span>
        <span class="label">{label}</span>
    </button>
</a>