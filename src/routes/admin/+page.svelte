<script>
	import AdminTab from "../../components/organisms/admin/AdminTab.svelte";
	import SubjectPanel from "../../components/organisms/admin/SubjectPanel.svelte";

	let selected = 0;
</script>

<article>
	<AdminTab bind:selected />
	{#if selected === 0}
		<SubjectPanel />
		<!-- {:else} -->
	{/if}
</article>

<style>
	article {
		height: calc(100vh - 50px);
	}
</style>
