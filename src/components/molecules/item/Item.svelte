<script lang="ts">
	import type { Word } from "../../../libs/CusomTypes";
	import Text from "../../atoms/text/Text.svelte";

	export let word: Word = {
		id: -1,
		word: "단어",
		kor: "kr",
		eng: "en",
	};
	let bgColor: string[] = [
		"bg-primary",
		"bg-secondary",
		"bg-tertiary",
		"bg-quaternary",
	];
</script>

<a href={`item/${word.id}`}>
	<li class="wrapper {bgColor[word.word.length % 4]}">
		<Text type={word.word.length % 2 ? 6 : 5} fontSize="large">
			{word.word}
		</Text>
	</li>
</a>

<style>
	.wrapper {
		list-style: none;
		width: 20vw;
		height: 20vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid;
	}

	.bg-primary {
		background-color: var(--primary);
		border-color: var(--primary);
	}
	.bg-secondary {
		background-color: var(--secondary);
		border-color: var(--secondary);
	}
	.bg-tertiary {
		background-color: var(--tertiary);
		border-color: var(--tertiary);
	}
	.bg-quaternary {
		background-color: var(--quaternary);
		border-color: var(--quaternary);
	}
</style>
