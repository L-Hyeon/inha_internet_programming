<script>
	import ItemDetail from "../../../components/organisms/detail/ItemDetail.svelte";

	export let data;
</script>

<article>
	<ItemDetail item={data.item} />
</article>
