<script lang="ts">
  import { onMount } from "svelte";
  import Hooks from "../../../libs/Hooks";
  import type { Word } from "../../../libs/CusomTypes";
  import Loading from "../../molecules/common/Loading.svelte";
  import WordItem from "../../molecules/admin/WordItem.svelte";
  import Button from "../../atoms/button/Button.svelte";
  import { goto } from "$app/navigation";

  let listElement: Element;
  let loading: boolean = false;
  let list: Word[] = [];
  let page = 0;

  const getWords = () => {
    loading = true;
    Hooks.getWords(page).then((res) => {
      list = [...list, ...res.data];
      loading = false;
    });
  };

  onMount(() => {
    getWords();
    if (listElement) {
      listElement.addEventListener("scroll", () => {
        if (
          listElement.scrollTop + listElement.clientHeight >=
          listElement.scrollHeight
        ) {
          page += 1;
          getWords();
        }
      });
    }
  });
</script>

<section>
  <div>
    <Button
      type={2}
      width="50px"
      height="30px"
      onClick={() => {
        goto("/admin/addWord");
      }}>추가</Button
    >
  </div>
  <ul bind:this={listElement}>
    {#each list as word}
      <WordItem {word} />
    {/each}
    {#if loading}
      <Loading />
    {/if}
  </ul>
</section>

<style>
  div {
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
  }
  ul {
    height: calc(96vh - 150px);
    padding-right: 10px;
    overflow-y: scroll;
  }
  ul::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  ul::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: var(--lightgrey);
    border-radius: 5px;
  }
</style>
