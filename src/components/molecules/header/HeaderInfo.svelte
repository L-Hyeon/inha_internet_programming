<script lang="ts">
	import { isLoggedIn, nickname } from "../../../stores/UserStore";
	import Button from "../../atoms/button/Button.svelte";
	import MediumText from "../../atoms/text/MediumText.svelte";

	const logout: () => void = () => {
		isLoggedIn.set(false);
	};
</script>

<div>
	{#if $isLoggedIn}
		<Button onClick={logout}>{$nickname}</Button>
	{:else}
		<a href="/login"><MediumText>로그인</MediumText></a>
		<a href="/register"><MediumText>회원가입</MediumText></a>
	{/if}
</div>

<style>
	div {
		padding-right: 20px;
		height: 49px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 20px;
	}
</style>
