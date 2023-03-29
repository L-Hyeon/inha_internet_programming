<script lang="ts">
	export let onClick: () => void;
	export let width: string = "600px";
	export let height: string = "50px";
	export let bgColor: string = "#fff";
	export let textColor: string = "black";
	export let border: string = "1px solid black";
</script>

<button
	on:click={onClick}
	style="width:{width};height:{height};background-color:{bgColor};color:{textColor};border:{border}"
	><slot /></button
>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		border-radius: 10px;
	}
</style>
