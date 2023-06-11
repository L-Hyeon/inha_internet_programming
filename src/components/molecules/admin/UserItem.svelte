<script lang="ts">
  import type { User } from "../../../libs/CusomTypes";
  import Hooks from "../../../libs/Hooks";
  import Button from "../../atoms/button/Button.svelte";
  import Text from "../../atoms/text/Text.svelte";

  export let user: User;

  const del = () => {
    Hooks.deleteUser(user.id).then((res) => {
      if (res.status === 200) {
        alert("삭제 완료");
      } else {
        alert("에러");
      }
    });
  };
</script>

<li>
  <div>
    <Text width="30%" height="40px" align="center">{user.id}</Text>
    <Text width="30%" height="40px" align="center">{user.uid}</Text>
  </div>
  <Button type={2} width="20%" height="40px" onClick={del}>삭제</Button>
</li>

<style>
  li {
    width: 100%;
    height: 50px;
    display: flex;
    gap: 4%;
    border-bottom: 1px solid var(--primary);
    justify-content: space-between;
    align-items: center;
  }
  div {
    width: 76%;
    display: flex;
    gap: 10%;
    justify-content: flex-start;
  }
</style>
