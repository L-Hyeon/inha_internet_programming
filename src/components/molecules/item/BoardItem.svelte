<script lang="ts">
  import Text from "../../atoms/text/Text.svelte";

  export let data: import("../../../libs/CusomTypes").Notice;
</script>

<a href={`/board/${data.id}`}>
  <li>
    <Text type={6}>{data.title}</Text>
    <Text type={6}>{data.uid}</Text>
  </li>
</a>

<style>
  li {
    padding-left: 2vw;
    padding-right: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(64vw + 30px);
    height: 50px;
    border-bottom: 1px solid var(--primary);
  }
  li:hover {
    background-color: var(--tetiary);
    transition: all linear 0.5s;
  }
</style>
