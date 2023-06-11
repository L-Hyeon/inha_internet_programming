<script lang="ts">
  import { onMount } from "svelte";
  import Loading from "../../molecules/common/Loading.svelte";
  import Hooks from "../../../libs/Hooks";
  import type { Notice } from "../../../libs/CusomTypes";
  import Text from "../../atoms/text/Text.svelte";
  import BoardItem from "../../molecules/item/BoardItem.svelte";
  import { goto } from "$app/navigation";
  import Button from "../../atoms/button/Button.svelte";
  import { isLoggedIn } from "../../../stores/UserStore";

  export let data: { list: [] };

  let listElement: Element;
  let loading: boolean = false;
  let list: Notice[] = data.list;
  let page = 0;

  const getNotices = (page: number) => {
    loading = true;
    Hooks.getNotices(page).then((res) => {
      list = [...list, ...res.data];
      loading = false;
    });
  };
  const gotoNew = () => {
    if (!$isLoggedIn) {
      goto("/login");
    }
    goto("/board/new");
  };

  onMount(() => {
    if (listElement) {
      listElement.addEventListener("scroll", () => {
        if (
          listElement.scrollTop + listElement.clientHeight >=
          listElement.scrollHeight
        ) {
          page += 1;
          getNotices(page);
        }
      });
    }
  });
</script>

<section>
  <div class="title">
    <Text type={1} fontSize="large">게시판</Text>
    <Button type={2} width="100px" height="30px" onClick={gotoNew}>
      글쓰기
    </Button>
  </div>
  <ul bind:this={listElement}>
    <div class="wrapper">
      {#each list as data}
        <BoardItem {data} />
      {/each}
      {#if loading}
        <Loading />
      {/if}
      {#if list.length === 0}
        <Text type={1}>게시글이 없어용...</Text>
      {/if}
    </div>
  </ul>
</section>

<style>
  ul {
    height: calc(98vh - 70px);
    padding-right: 10px;
    overflow-y: scroll;
  }
  .wrapper {
    width: calc(64vw + 20px);
    margin: 0 auto;
    padding-top: 2vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2vw;
  }
  .title {
    margin: 0 auto;
    width: calc(64vw + 20px);
    display: flex;
    justify-content: space-between;
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
