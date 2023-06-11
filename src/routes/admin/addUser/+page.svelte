<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../../components/atoms/button/Button.svelte";
  import Input from "../../../components/atoms/input/Input.svelte";
  import Text from "../../../components/atoms/text/Text.svelte";
  import LabeledInput from "../../../components/molecules/input/LabeledInput.svelte";
  import type { User } from "../../../libs/CusomTypes";
  import Hooks from "../../../libs/Hooks";

  let uid: string;
  let pw: string;

  const add = () => {
    Hooks.addUser(uid, pw).then((res) => {
      if (res.status === 200) {
        alert("추가 완료");
        goto("/admin");
      } else {
        alert("에러");
      }
    });
  };
</script>

<article>
  <div>회원 추가</div>
  <form
    on:submit={(e) => {
      e.preventDefault();
    }}
  >
    <LabeledInput label="계정" bind:value={uid} />
    <LabeledInput label="비밀번호" type="password" bind:value={pw} />
    <Button type={2} onClick={add}>가입하기</Button>
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
