<script lang="ts">
	export let width: string = "auto";
	export let color: string = "black";
</script>

<div style="width:{width};color:{color}">
	<slot />
</div>

<style>
	div {
		font-family: "TheJamsil5Bold";
		text-align: center;
		font-size: 18px;
	}
</style>
