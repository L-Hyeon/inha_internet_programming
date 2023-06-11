<script lang="ts">
	import MainList from "../components/organisms/list/MainList.svelte";

	export let data: { list: [] };
</script>

<svelte:head>
	<title>INP</title>
</svelte:head>

<article>
	<MainList {data} />
</article>
