<script lang="ts">
	import MyList from "../../components/organisms/list/MyList.svelte";

	export let data: { list: [] };
</script>

<svelte:head>
	<title>INP | 프로필</title>
</svelte:head>

<article>
	<MyList {data} />
</article>
