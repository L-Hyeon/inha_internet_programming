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
		<Image src={item.thumbnail} alt={item.title} size={1} />
		<div class="info">
			<div class="hashtags">
				<Text type={3} width="8vw" wrap={false} fontSize="small"
					>#{item.category}</Text
				>
				<Text type={3} width="8vw" wrap={false} fontSize="small" align={"left"}>
					#{item.brand}
				</Text>
			</div>
			<Text type={1} width="18vw" fontSize="large" align={"left"}>
				{item.title}
			</Text>
			<div class="row">
				<Text type={3}>
					★{item.rating}
				</Text>
				<Text type={1}>
					${item.price.toLocaleString()}
				</Text>
			</div>
		</div>
	</li></a
>

<style>
	.wrapper {
		list-style: none;
		width: 20vw;
		height: 26vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid var(--primary);
	}
	.info {
		padding: 0 10px 10px 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		align-items: start;
	}
	.hashtags {
		display: flex;
		gap: 10px;
	}
	.row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
