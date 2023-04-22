<script lang="ts">
	import Input from "../../atoms/input/Input.svelte";

	export let label: string = "";
	export let value: string;
	export let width: string = "600px";
	export let height: string = "50px";
	export let type: string = "text";
	export let bgColor: string = "#fff";
	export let textColor: string = "black";
	export let border: string = "1px solid black";
</script>

<div>
	<label for={label}>{label}</label>
	<Input
		name={label}
		{type}
		{bgColor}
		{textColor}
		{border}
		bind:value
		{width}
		{height}
		placeholder={`${label}을 입력해주세요`}
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}
	label {
		font-size: 20px;
	}
</style>
