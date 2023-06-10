<script lang="ts">
	import ItemDetail from "../../../components/organisms/detail/ItemDetail.svelte";

	export let data: import("../../../libs/CusomTypes").Word;
</script>

<article>
	<ItemDetail word={data} />
</article>
