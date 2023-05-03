<script lang="ts">
	import "./text.css";

	export let width: string = "auto";
	export let height: string = "auto";
	export let fontSize: string = "medium";
	export let type: number = 1;
	export let align: string = "center";
	export let wrap: boolean = true;
</script>

<div
	style="width:{width};height:{height};white-space:{wrap
		? 'wrap'
		: 'nowrap'};text-align:{align}"
	class={[`text-type-${type}`, `font-size-${fontSize}`].join(" ")}
>
	<slot />
</div>

<style>
	div {
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
