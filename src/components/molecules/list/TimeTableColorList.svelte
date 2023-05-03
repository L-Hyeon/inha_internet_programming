<script lang="ts">
	import type { Subject } from "../../../libs/CusomTypes";
	import Text from "../../atoms/text/Text.svelte";

	export let colorList: number[] = [];
	export let table: Subject[] = [];
</script>

<ul>
	{#each colorList as e, idx}
		<li>
			<div class="colors" style="background-color:var(time${e})" />
			<Text type={1} fontSize="small">{table[idx].title}</Text>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: none;
	}
	li {
		list-style: none;
		display: flex;
		gap: 10px;
	}
	.colors {
		widows: 20px;
		height: 20px;
	}
</style>
