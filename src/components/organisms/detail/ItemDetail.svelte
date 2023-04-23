<script lang="ts">
	import Image from "../../atoms/Image/Image.svelte";
	import Button from "../../atoms/button/Button.svelte";
	import Text from "../../atoms/text/Text.svelte";

	export let item: import("../../../libs/CusomTypes").ItemDetailType;
</script>

<section>
	<Image src={item.thumbnail} alt={item.title} size={2} />
	<div class="info">
		<div class="hasGap">
			<Text fontSize="title" align="left">
				{item.title}
			</Text>
			<div class="hashtags">
				<Text type={1} fontSize="large">#{item.category}</Text>
				<Text type={1} fontSize="large">
					#{item.brand}
				</Text>
			</div>
			<Text type={2} fontSize="title">
				${item.price}
			</Text>
		</div>

		<div class="hasGap">
			<Text align="left" type={1}>
				{item.description}
			</Text>
			<div class="row widthFull">
				<div class="row">
					<Text fontSize="large">
						★{item.rating}
					</Text>
					<Text fontSize="large">♥0</Text>
				</div>
				<div class="row">
					<Button type={2} width="200px" onClick={() => {}}>찜하기</Button>
					<Button type={2} width="200px" onClick={() => {}}>평가하기</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		width: 64vw;
		padding: 4vh 0 4vh 0;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--primary);
	}
	.info {
		width: 32vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
	}
	.hasGap {
		display: flex;
		flex-direction: column;
		gap: 1vw;
		align-items: start;
	}
	.hashtags {
		display: flex;
		gap: 10px;
	}
	.row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 10px;
	}
	.widthFull {
		width: 100%;
	}
</style>
