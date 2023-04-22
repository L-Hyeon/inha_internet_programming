<script lang="ts">
	import type { ItemType } from "../../../libs/CusomTypes";
	import Image from "../../atoms/Image/Image.svelte";
	import Text from "../../atoms/text/Text.svelte";

	export let item: ItemType = {
		id: -1,
		title: "title",
		thumbnail: "",
		price: 0,
		category: "category",
		brand: "brand",
		rating: 0,
	};
</script>

<a href={`item/${item.id}`}>
	<li class="wrapper">
		<div class="img" />
		<!-- <Image src={item.thumbnail} alt={item.title} size={1} /> -->
		<Text type={1} fontSize="large">
			{item.title}
		</Text>
		<Text>
			{item.price}
		</Text>
		<Text>
			{item.category}
		</Text>
		<Text>
			{item.brand}
		</Text>
		<Text>
			{item.rating}
		</Text>
	</li></a
>

<style>
	.wrapper {
		list-style: none;
		width: 20vw;
		height: 500px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid var(--primary);
	}
	.img {
		width: 20vw;
		height: 300px;
		background-color: var(--secondary);
	}
</style>
