<script lang="ts">
	import BoardList from "../../components/organisms/list/BoardList.svelte";

	export let data: { list: [] };
</script>

<article>
	<BoardList {data} />
</article>
