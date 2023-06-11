<script lang="ts">
  import Button from "../../atoms/button/Button.svelte";

  export let selected: number = 0;

  const route = (idx: number) => {
    if (selected === idx) return;
    selected = idx;
  };
</script>

<nav>
  <Button
    width="10vw"
    height="30px"
    type={selected === 0 ? 2 : 1}
    onClick={() => {
      route(0);
    }}>단어</Button
  >
  <Button
    width="10vw"
    height="30px"
    type={selected === 1 ? 2 : 1}
    onClick={() => {
      route(1);
    }}>회원</Button
  >
  <Button
    width="10vw"
    height="30px"
    type={selected === 2 ? 2 : 1}
    onClick={() => {
      route(2);
    }}>게시글</Button
  >
</nav>

<style>
  nav {
    width: 100%;
    height: 60px;
    padding: 10px 0 10px 10px;
    display: flex;
  }
</style>
