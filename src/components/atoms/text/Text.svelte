<script lang="ts">
	import "./text.css";

	export let width: string = "auto";
	export let fontSize: string = "medium";
	export let type: number = 1;
	export let align: string = "center";
</script>

<div
	style="width:{width};text-align:{align}"
	class={[`text-type-${type}`, `font-size-${fontSize}`].join(" ")}
>
	<slot />
</div>
