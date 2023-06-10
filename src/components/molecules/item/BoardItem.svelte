<script lang="ts">
	import Text from "../../atoms/text/Text.svelte";

	export let data: import("../../../libs/CusomTypes").Notice;
	export let showModal: () => void;
</script>

<li on:click={showModal}>
	<Text type={6}>{data.title}</Text>
	<Text type={6}>{data.user_id}</Text>
</li>

<style>
	li {
		padding-left: 2vw;
		padding-right: 2vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
	}
	li:hover {
		background-color: var(--tetiary);
		transition: all linear 0.5s;
	}
</style>
