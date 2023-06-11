<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../../components/atoms/button/Button.svelte";
  import Input from "../../../components/atoms/input/Input.svelte";
  import Text from "../../../components/atoms/text/Text.svelte";
  import Hooks from "../../../libs/Hooks";

  let word: string;
  let kor: string;
  let eng: string;

  const add = () => {
    Hooks.addWord(word, kor, eng).then((res) => {
      if (res.status === 200) {
        goto("/admin");
      }
    });
  };
</script>

<li>
  <div class="row">
    <div class="col" style="width:20%;">
      <Text width="100%" height="40px" align="center">new</Text>
      <Input width="100%" height="40px" bind:value={word} />
    </div>
    <div class="col" style="width:70%;">
      <Input width="100%" height="40px" bind:value={kor} />
      <Input width="100%" height="40px" bind:value={eng} />
    </div>
  </div>
  <div class="buttons col">
    <Button type={2} width="100%" height="40px" onClick={add}>추가</Button>
  </div>
</li>

<style>
  li {
    width: 80%;
    margin: 0 auto;
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
