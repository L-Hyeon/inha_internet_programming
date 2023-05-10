<script lang="ts">
	import "./button.css";

	export let onClick: () => void;
	export let width: string = "600px";
	export let height: string = "50px";
	export let type: number = 1;
	export let fontSize: string = "medium";
	export let classNames: string[] = [];
	export let borderRadius: boolean = true;
</script>

<button
	on:click={onClick}
	style="width:{width};height:{height};"
	class={[
		`button-type-${type}`,
		`font-size-${fontSize}`,
		borderRadius ? "border-radius-10" : "border-radius-none",
		...classNames,
	].join(" ")}><slot /></button
>
