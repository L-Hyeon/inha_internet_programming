<script lang="ts">
	import { goto } from "$app/navigation";
	import { isLoggedIn, nickname } from "../../../stores/UserStore";
	import Button from "../../atoms/button/Button.svelte";

	const logout: () => void = () => {
		isLoggedIn.set(false);
	};
</script>

<div>
	{#if $isLoggedIn}
		<Button onClick={logout} type={2}>{$nickname}</Button>
	{:else}
		<Button
			width="100px"
			height="49px"
			onClick={() => {
				goto("/login");
			}}
			type={1}>로그인</Button
		>
		<Button
			width="100px"
			height="49px"
			onClick={() => {
				goto("/register");
			}}
			type={1}>회원가입</Button
		>
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
