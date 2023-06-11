<script lang="ts">
	import ItemDetail from "../../../components/organisms/detail/ItemDetail.svelte";

	export let data: import("../../../libs/CusomTypes").Word;
</script>

<svelte:head>
	<title>INP | {data.item.word}</title>
</svelte:head>

<article>
	<ItemDetail word={data} />
</article>
