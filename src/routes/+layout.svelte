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
		time1: "#809bce",
		time2: "#95b8d1",
		time3: "#b8e0d4",
		time4: "#d6eadf",
		time5: "#eac4d5",
		time6: "#f5e2ea",
		time7: "#faf1f5",
		time8: "#b0acd0",
		time9: "#ccd0ac",
		time10: "#d0b0ac",
		time11: "#ce809b",
		time12: "#9bce80",
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
