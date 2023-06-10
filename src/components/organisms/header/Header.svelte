<script>
	import HeaderInfo from "../../molecules/header/HeaderInfo.svelte";
	import Logo from "../../molecules/header/Logo.svelte";
</script>

<header>
	<Logo />
	<HeaderInfo />
</header>

<style>
	header {
		width: 100%;
		margin-bottom: 2vh;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--primary);
	}
</style>
