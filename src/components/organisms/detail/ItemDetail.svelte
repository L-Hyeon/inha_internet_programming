<script lang="ts">
	import Button from "../../atoms/button/Button.svelte";
	import Text from "../../atoms/text/Text.svelte";
	import { onMount } from "svelte";
	import Hooks from "../../../libs/Hooks";
	import { isLoggedIn, studies } from "../../../stores/UserStore";
	import { goto } from "$app/navigation";

	export let word: any;
	let color: number;
	let bgColor: string[] = [
		"bg-primary",
		"bg-secondary",
		"bg-tertiary",
		"bg-quaternary",
	];

	const study = () => {
		if (!$isLoggedIn) {
			goto("/login");
		}
		Hooks.addStudy(word.item.id)
			.then((res) => {
				studies.set([...$studies, word.item.id]);
			})
			.catch((e) => {
				alert(e);
			});
	};
	const deleteStudy = () => {
		Hooks.deleteStudy(word.item.id).then((res) => {
			studies.set($studies.splice($studies.indexOf(word.item.id), 1));
			goto("/");
		});
	};

	onMount(() => {
		color = (word.item.word.length % 4) + 1;
		console.log($studies);
	});
</script>

<section>
	<div class="word {bgColor[color - 1]}">
		<Text type={word.item.word.length % 2 ? 6 : 5} fontSize="title">
			{word.item.word}
		</Text>
	</div>
	<div class="info">
		<dl>
			<dt><Text type={color} align="start" fontSize="large">KR</Text></dt>
			<dd>
				<Text type={color} align="start" fontSize="medium">{word.item.kor}</Text
				>
			</dd>
			<dt><Text type={color} align="start" fontSize="large">EN</Text></dt>
			<dd>
				<Text type={color} align="start" fontSize="medium">{word.item.eng}</Text
				>
			</dd>
		</dl>
		<Button
			type={$studies.includes(word.item.id) ? 5 : 6}
			onClick={$studies.includes(word.item.id) ? deleteStudy : study}
			width="20vw"
		>
			{$studies.includes(word.item.id) ? "Studied!" : "Study!"}
		</Button>
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
	.word {
		width: 30vw;
		height: 30vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.info {
		width: 32vw;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	dd {
		padding-left: 2vw;
		margin-bottom: 2vh;
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
