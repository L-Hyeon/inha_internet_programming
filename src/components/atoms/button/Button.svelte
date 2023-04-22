<script lang="ts">
	import "./button.css";

	export let onClick: () => void;
	export let width: string = "600px";
	export let height: string = "50px";
	export let type: number = 1;
	export let fontSize: string = "medium";
</script>

<button
	on:click={onClick}
	style="width:{width};height:{height};"
	class={[`button-type-${type}`, `font-size-${fontSize}`].join(" ")}
	><slot /></button
>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}
</style>
