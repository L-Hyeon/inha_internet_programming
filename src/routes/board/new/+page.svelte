<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../../components/atoms/button/Button.svelte";
  import Input from "../../../components/atoms/input/Input.svelte";
  import Text from "../../../components/atoms/text/Text.svelte";
  import Hooks from "../../../libs/Hooks";

  let title: string = "";
  let content: string = "";

  const submit = () => {
    Hooks.addNotice(title, content).then((res) => {
      goto("/board");
    });
  };
</script>

<article>
  <section>
    <Input placeholder="제목" bind:value={title} width="100%" />
    <textarea placeholder="내용" bind:value={content} style="height: 80vh" />
    <div class="wrapper">
      <Button type={2} width="100px" onClick={submit}>작성</Button>
    </div>
  </section>
</article>

<style>
  section {
    width: calc(64vw + 20px);
    margin: 0 auto;
  }
  textarea {
    width: calc(64vw + 20px);
    height: 80vh;
    margin-top: 2vh;
    border: 1px solid var(--primary);
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;
  }
  .wrapper {
    width: 100%;
    margin-top: 2vh;
    display: flex;
    justify-content: end;
  }
</style>
