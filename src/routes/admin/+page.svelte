<script>
  import AdminTab from "../../components/organisms/admin/AdminTab.svelte";
  import BoardPanel from "../../components/organisms/admin/BoardPanel.svelte";
  import UserPanel from "../../components/organisms/admin/UserPanel.svelte";
  import WordPanel from "../../components/organisms/admin/WordPanel.svelte";

  let selected = 0;
  let panels = [WordPanel, UserPanel, BoardPanel];
</script>

<article>
  <AdminTab bind:selected />
  <svelte:component this={panels[selected]} />
</article>

<style>
  article {
    width: 80vw;
    height: calc(98vh - 50px);
    margin: 0 auto;
  }
</style>
