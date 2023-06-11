<script lang="ts">
	import BoardList from "../../components/organisms/list/BoardList.svelte";

	export let data: { list: [] };
</script>

<svelte:head>
	<title>INP | 게시판</title>
</svelte:head>

<article>
	<BoardList {data} />
</article>
