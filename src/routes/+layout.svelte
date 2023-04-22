<script>
	import { onMount } from "svelte";
	import Header from "../components/organisms/header/Header.svelte";

	const COLORS = {
		white: "#FFFFFF",
		black: "#000000",
		lightgrey: "#cccccc",
		grey: "#aaaaaa",
		darkgrey: "#777777",
		primary: "#2C5460",
		secondary: "#BBDC2F",
		tertiary: "#61B136",
		quaternary: "#CBE0E0",
	};

	onMount(() => {
		for (let [key, value] of Object.entries(COLORS)) {
			document.documentElement.style.setProperty(`--${key}`, value);
		}
	});
</script>

<Header />
<main>
	<slot />
</main>
