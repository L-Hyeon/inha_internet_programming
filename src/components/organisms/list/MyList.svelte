<script lang="ts">
	import { onMount } from "svelte";
	import Loading from "../../molecules/common/Loading.svelte";
	import Hooks from "../../../libs/Hooks";
	import type { Word } from "../../../libs/CusomTypes";
	import Item from "../../molecules/item/Item.svelte";
	import Text from "../../atoms/text/Text.svelte";

	export let data: { list: [] };

	let listElement: Element;
	let loading: boolean = false;
	let list: Word[] = data.list;
	let page = 0;

	const getStudies = (page: number) => {
		loading = true;
		Hooks.getStudies(page).then((res) => {
			list = [...list, ...res.data];
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
					getStudies(page);
				}
			});
		}
	});
</script>

<section>
	<ul bind:this={listElement}>
		<div class="wrapper">
			{#each list as word}
				<Item {word} />
			{/each}
			{#if loading}
				<Loading />
			{/if}
			{#if list.length === 0}
				<Text type={1} fontSize="large">공부한 단어가 없어요...</Text>
			{/if}
		</div>
	</ul>
</section>

<style>
	ul {
		height: calc(98vh - 70px);
		padding-right: 10px;
		overflow-y: scroll;
	}
	.wrapper {
		width: calc(64vw + 20px);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 2vw;
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
