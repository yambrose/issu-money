<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import DefaultIcon from '$lib/components/icons/DefaultIcon.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--<Card icon={DefaultIcon} />-->

<section>
	<h1>Want to give me money?</h1>
	<p>You'd be impressed at how fast I could make it disappear.</p>

	<div class="grid">
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
		<Card icon={DefaultIcon} iconProps={{width: "64px", height: "64px"}} />
	</div>

</section>


<style>
    h1 {
        font-size: var(--text-size-lg);
    }

    p {
        font-size: var(--text-size-md);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 10rem;
        gap: 1rem;
        margin-top: 1rem;
    }

</style>