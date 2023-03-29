<script lang="ts">
	import Button from "../../atoms/button/Button.svelte";
	import Input from "../../atoms/input/Input.svelte";

	let userId: string;
	let userPw: string;

	const login = () => {
		console.log(userId, userPw);
	};
</script>

<section class="login-panel">
	<div class="logo">Inha<br />Internet Programming</div>
	<Input bind:value={userId} placeholder="아이디" />
	<Input type="password" bind:value={userPw} placeholder="비밀번호" />
	<Button bgColor="#6667ab" border="none" textColor="white" onClick={login}
		>로그인</Button
	>
</section>

<style>
	.login-panel {
		width: 600px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.logo {
		font-family: "HS-Regular";
		color: #6667ab;
		font-size: 50px;
		width: 100%;
		height: 200px;
	}
</style>
