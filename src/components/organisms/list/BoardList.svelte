<script lang="ts">
	import { onMount } from "svelte";
	import Loading from "../../molecules/common/Loading.svelte";
	import Hooks from "../../../libs/Hooks";
	import type { Notice } from "../../../libs/CusomTypes";
	import Text from "../../atoms/text/Text.svelte";
	import BoardItem from "../../molecules/item/BoardItem.svelte";

	export let data: { list: [] };

	let listElement: Element;
	let loading: boolean = false;
	let list: Notice[] = data.list;
	let page = 0;

	const getNotices = (page: number) => {
		loading = true;
		Hooks.getNotices(page).then((res) => {
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
					getNotices(page);
				}
			});
		}
	});
</script>

<section>
	<ul bind:this={listElement}>
		<div class="wrapper">
			{#each list as data}
				<BoardItem {data} showModal={() => {}} />
			{/each}
			{#if loading}
				<Loading />
			{/if}
			{#if list.length === 0}
				<Text type={1} fontSize="large">게시글이 없어용...</Text>
			{/if}
		</div>
	</ul>
	<div class="modal" />
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
