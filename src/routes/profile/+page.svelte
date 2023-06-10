<script lang="ts">
	import MyList from "../../components/organisms/list/MyList.svelte";

	export let data: { list: [] };
</script>

<article>
	<MyList {data} />
</article>
