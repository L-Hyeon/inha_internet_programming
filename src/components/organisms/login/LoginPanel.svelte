<script lang="ts">
	import Button from "../../atoms/button/Button.svelte";
	import Input from "../../atoms/input/Input.svelte";

	let userId: string;
	let userPw: string;

	const login = () => {
		console.log(userId, userPw);
	};
</script>

<article class="login-panel">
	<div class="logo">Inha<br />Internet Programming</div>
	<form on:submit={(e) => e.preventDefault()}>
		<Input bind:value={userId} type="email" placeholder="이메일" />
		<Input type="password" bind:value={userPw} placeholder="비밀번호" />
		<Button type={2} onClick={login}>로그인</Button>
	</form>
</article>

<style>
	.login-panel {
		margin: 10vh auto;
		width: 600px;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.logo {
		font-family: "HS-Regular";
		color: var(--primary);
		font-size: 50px;
		width: 100%;
		height: 200px;
	}
</style>
