<script lang="ts">
	import type { ItemType } from "../../../libs/CusomTypes";
	import MediumText from "../../atoms/text/MediumText.svelte";

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

<div class="wrapper">
	<div class="img" />
	<MediumText>
		{item.title}
	</MediumText>
</div>
