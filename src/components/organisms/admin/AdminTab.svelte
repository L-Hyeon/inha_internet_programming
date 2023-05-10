<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "../../atoms/button/Button.svelte";

	export let selected: number = 0;

	const route = (idx: number) => {
		if (idx === 0) {
			if (selected === 0) return;
			selected = 0;
			goto("/admin/item");
		} else {
			if (selected === 1) return;
			selected = 1;
			goto("/admin/member");
		}
	};
</script>

<nav>
	<Button
		width="10vw"
		type={selected === 0 ? 2 : 1}
		onClick={() => {
			route(0);
		}}>강의</Button
	>
	<Button
		width="10vw"
		type={selected === 1 ? 2 : 1}
		onClick={() => {
			route(1);
		}}>회원</Button
	>
</nav>

<style>
	nav {
		width: 100vw;
		height: 60px;
		padding: 10px 0 10px 10px;
		display: flex;
	}
</style>
