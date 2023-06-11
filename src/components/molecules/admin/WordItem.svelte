<script lang="ts">
  import type { Word } from "../../../libs/CusomTypes";
  import Hooks from "../../../libs/Hooks";
  import Button from "../../atoms/button/Button.svelte";
  import Input from "../../atoms/input/Input.svelte";
  import Text from "../../atoms/text/Text.svelte";

  export let word: Word;

  const modify = () => {
    Hooks.modifyWord(word.id, word.word, word.kor, word.eng).then((res) => {
      if (res.status === 200) {
        alert("수정 완료");
      } else {
        alert("에러");
      }
    });
  };
  const del = () => {
    Hooks.deleteWord(word.id).then((res) => {
      if (res.status === 200) {
        alert("삭제 완료");
      } else {
        alert("에러");
      }
    });
  };
</script>

<li>
  <div class="row">
    <div class="col" style="width:20%;">
      <Text width="100%" height="40px" align="center">{word.id}</Text>
      <Input width="100%" height="40px" bind:value={word.word} />
    </div>
    <div class="col" style="width:70%;">
      <Input width="100%" height="40px" bind:value={word.kor} />
      <Input width="100%" height="40px" bind:value={word.eng} />
    </div>
  </div>
  <div class="buttons col">
    <Button type={2} width="100%" height="40px" onClick={modify}>수정</Button>
    <Button type={2} width="100%" height="40px" onClick={del}>삭제</Button>
  </div>
</li>

<style>
  li {
    width: 100%;
    height: 120px;
    display: flex;
    gap: 4%;
    border-bottom: 1px solid var(--primary);
    justify-content: space-between;
    align-items: center;
  }
  div {
    display: flex;
    gap: 10%;
    height: 100%;
  }
  .row {
    width: 80%;
  }
  .col {
    flex-direction: column;
    justify-content: space-around;
    gap: 0%;
  }
  .buttons {
    width: 10%;
  }
</style>
