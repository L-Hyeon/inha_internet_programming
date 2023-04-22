<script lang="ts">
	import "./image.css";

	export let src: string = "";
	export let alt: string = "none";
	export let size: number = 1;
</script>

<img {src} {alt} class={`img-size-${size}`} />

<style>
	img {
		object-fit: cover;
	}
</style>
