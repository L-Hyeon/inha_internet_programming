<script lang="ts">
	import { onMount } from "svelte";
	import type { ItemType } from "../../../libs/CusomTypes";
	import Loading from "../../molecules/common/Loading.svelte";
	import Item from "../../molecules/item/Item.svelte";
	import Hooks from "../../../libs/Hooks";
	import Text from "../../atoms/text/Text.svelte";
	import ListFilter from "../filter/ListFilter.svelte";

	export let data: { list: [] };

	let listElement: Element;
	let loading: boolean = false;
	let list: ItemType[] = data.list;
	let page = 0;

	const getItems = (page: number) => {
		loading = true;
		Hooks.getItems(page).then((res) => {
			list = [...list, ...res.data.products];
			loading = false;
		});
	};

	onMount(() => {
		if (listElement) {
			listElement.addEventListener("scroll", () => {
				if (
					listElement.scrollTop + listElement.clientHeight >=
					listElement.scrollHeight
				) {
					page += 1;
					getItems(page);
				}
			});
		}
	});
</script>

<section>
	<div class="filters">
		<Text type={1} fontSize="large">강의</Text>
		<ListFilter />
	</div>
	<ul bind:this={listElement}>
		{#each list as item}
			<Item {item} />
		{/each}
		{#if loading}
			<Loading />
		{/if}
	</ul>
</section>

<style>
	section {
		width: calc(64vw + 20px);
		margin: 0 auto;
		padding: 2vh 0 2vh 0;
	}
	.filters {
		height: 4vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	ul {
		height: calc(92vh - 50px);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 2vw;
		padding-right: 10px;
		overflow-y: scroll;
	}
	ul::-webkit-scrollbar {
		width: 10px;
		background-color: transparent;
	}
	ul::-webkit-scrollbar-thumb {
		width: 10px;
		background-color: var(--lightgrey);
		border-radius: 5px;
	}
</style>
