<script lang="ts">
	import { goto } from "$app/navigation";
	import { isLoggedIn, nickname } from "../../../stores/UserStore";
	import Button from "../../atoms/button/Button.svelte";

	const logout: () => void = () => {
		isLoggedIn.set(false);
		goto("/");
	};
</script>

<div>
	<Button
		width="100px"
		height="49px"
		onClick={() => {
			goto(!$isLoggedIn ? "/login" : "/profile");
		}}
		type={1}>{!$isLoggedIn ? "로그인" : $nickname}</Button
	>
	<Button
		width="100px"
		height="49px"
		onClick={() => {
			!$isLoggedIn ? goto("/register") : logout();
		}}
		type={1}>{!$isLoggedIn ? "회원가입" : "로그아웃"}</Button
	>
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
