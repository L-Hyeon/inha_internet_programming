<script lang="ts">
  import { onMount } from "svelte";
  import Button from "../../../components/atoms/button/Button.svelte";
  import Text from "../../../components/atoms/text/Text.svelte";
  import Hooks from "../../../libs/Hooks";
  import { goto } from "$app/navigation";
  import Input from "../../../components/atoms/input/Input.svelte";
  import { isLoggedIn } from "../../../stores/UserStore";

  export let data: any;
  let onEdit: boolean = false;
  let title: string;
  let content: string;

  const gotoModify = () => {
    if (!$isLoggedIn) {
      goto("/login");
    }
    onEdit = true;
  };
  const modify = () => {
    Hooks.modifyNotice(data.item.id, title, content).then((res) => {
      goto("/board");
    });
  };
  const del = () => {
    if (!$isLoggedIn) {
      goto("/login");
    }
    Hooks.deleteNotice(data.item.id).then((res) => {
      goto("/board");
    });
  };

  onMount(() => {
    title = data.item.title;
    content = data.item.content;
  });
</script>

<article>
  {#if onEdit}
    <section>
      <Input placeholder="제목" bind:value={title} width="100%" />
      <textarea bind:value={content} style="height: 80vh" />
    </section>
  {:else}
    <section>
      <Text type={1} fontSize="large" align="left">{data.item.title}</Text>
      <Text type={2} fontSize="small" align="right">{data.item.uid}</Text>
      <hr />
      <Text type={3} align="left">{data.item.content}</Text>
    </section>
  {/if}
  <div class="wrapper">
    <Button type={2} width="100px" onClick={onEdit ? modify : gotoModify}
      >수정</Button
    >
    <Button type={2} width="100px" onClick={del}>삭제</Button>
  </div>
</article>

<style>
  article {
    width: calc(64vw + 20px);
    margin: 0 auto;
  }
  section {
    height: 85vh;
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
  hr {
    background-color: var(--primary);
  }
  .wrapper {
    width: 100%;
    margin-top: 2vh;
    display: flex;
    justify-content: end;
    gap: 10px;
  }
</style>
