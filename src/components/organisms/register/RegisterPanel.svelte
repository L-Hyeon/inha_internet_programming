<script lang="ts">
	import Button from "../../atoms/button/Button.svelte";
	import LabeledInput from "../../molecules/input/LabeledInput.svelte";

	let email: string = "";
	let nickname: string = "";
	let pw: string = "";
	let pwConfirm: string = "";

	const register = () => {
		if (pw != pwConfirm) {
			alert("비밀번호가 달라요...");
			pw = "";
			pwConfirm = "";
			return;
		}
	};
</script>

<article>
	<div>가입하기</div>
	<form
		on:submit={(e) => {
			e.preventDefault();
		}}
	>
		<LabeledInput label="계정" bind:value={email} />
		<LabeledInput label="닉네임" bind:value={nickname} />
		<LabeledInput label="비밀번호" type="password" bind:value={pw} />
		<LabeledInput
			label="비밀번호 확인"
			type="password"
			bind:value={pwConfirm}
		/>
		<Button type={2} onClick={register}>가입하기</Button>
	</form>
</article>

<style>
	article {
		margin: 10vh auto;
		width: 600px;
	}
	div {
		font-family: "HS-Regular";
		color: var(--primary);
		font-size: 50px;
		width: 100%;
		text-align: center;
		height: 100px;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
