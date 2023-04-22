<script lang="ts">
	import "./text.css";

	export let width: string = "auto";
	export let fontSize: string = "medium";
	export let type: number = 1;
</script>

<div
	style="width:{width};"
	class={[`text-type-${type}`, `font-size-${fontSize}`].join(" ")}
>
	<slot />
</div>
