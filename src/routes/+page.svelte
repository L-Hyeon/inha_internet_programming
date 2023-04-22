<script lang="ts">
	import MainList from "../components/organisms/list/MainList.svelte";

	export let data: { list: [] };
</script>

<article>
	<MainList {data} />
</article>
