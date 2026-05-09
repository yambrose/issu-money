<script lang="ts">
	import NavButton from './NavButton.svelte';
	import DefaultIcon from '$lib/components/icons/DefaultIcon.svelte';
	import SettingsIcon from '$lib/components/icons/SettingsIcon.svelte';
</script>

<aside class="nav-bar">
	<h1 class="nav-header">John Pork</h1>
	<NavButton href="/" icon={DefaultIcon} iconProps={{width: 24, height: 24}} label="Home" />
	<NavButton href="/about" icon={DefaultIcon} iconProps={{width: 24, height: 24}} label="About" />
	<NavButton href="/contact" icon={DefaultIcon} iconProps={{width: 24, height: 24}} label="Contact" />
	<NavButton href="/settings" icon={SettingsIcon} iconProps={{width: 24, height: 24}} label="Settings" bottom />
</aside>

<style>

</style>
