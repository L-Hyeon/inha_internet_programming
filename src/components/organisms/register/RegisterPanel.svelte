<script lang="ts">
  import { goto } from "$app/navigation";
  import Hooks from "../../../libs/Hooks";
  import Button from "../../atoms/button/Button.svelte";
  import LabeledInput from "../../molecules/input/LabeledInput.svelte";

  let email: string = "";
  let pw: string = "";
  let pwConfirm: string = "";

  const register = () => {
    if (pw != pwConfirm) {
      alert("비밀번호가 달라요...");
      pw = "";
      pwConfirm = "";
      return;
    }
    Hooks.register(email, pw).then((res) => {
      if (res.status === 200) goto("/");
      else alert("error");
    });
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
