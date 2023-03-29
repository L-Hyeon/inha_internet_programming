<script lang="ts">
	export let width: string = "auto";
	export let color: string = "black";
</script>

<div style="width:{width};color:{color}">
	<slot />
</div>

<style>
	div {
		text-align: center;
		font-size: 16px;
	}
</style>
