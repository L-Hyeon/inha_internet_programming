<script lang="ts">
  import { onMount } from "svelte";
  import Hooks from "../../../libs/Hooks";
  import type { User } from "../../../libs/CusomTypes";
  import Loading from "../../molecules/common/Loading.svelte";
  import Button from "../../atoms/button/Button.svelte";
  import { goto } from "$app/navigation";
  import UserItem from "../../molecules/admin/UserItem.svelte";

  let listElement: Element;
  let loading: boolean = false;
  let list: User[] = [];
  let page = 0;

  const getUsers = () => {
    loading = true;
    Hooks.getUsers(page).then((res) => {
      list = [...list, ...res.data];
      loading = false;
    });
  };

  onMount(() => {
    getUsers();
    if (listElement) {
      listElement.addEventListener("scroll", () => {
        if (
          listElement.scrollTop + listElement.clientHeight >=
          listElement.scrollHeight
        ) {
          page += 1;
          getUsers();
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
        goto("/admin/addUser");
      }}>추가</Button
    >
  </div>
  <ul bind:this={listElement}>
    {#each list as user}
      <UserItem {user} />
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
