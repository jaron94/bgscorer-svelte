<!-- {@debug disp_players, actual_players} -->

<script>
  import { List } from "framework7-svelte";
  import Apinput from "../components/apinput.svelte";

  let disp_players = [1, 2, 3];
  let actual_players = [1, 2];
  let max_players = 7;

  $: last_pinput = disp_players.filter(x => !actual_players.includes(x))[0];

  function addPlayer() {
    actual_players = disp_players;
    if (disp_players.length < max_players) {
      disp_players = [...disp_players, Math.max(...disp_players) + 1];
    }
  }

  function removePlayer(pnum) {
    actual_players = actual_players.filter((p) => p != pnum);
    disp_players = disp_players.filter((p) => p != pnum);
    if (actual_players.length == max_players - 1) {
      addPlayer();
    }
  }
</script>

<List>
  {#each disp_players as player_num (player_num)}
    <Apinput {player_num} {last_pinput} {addPlayer} {removePlayer} />
  {/each}
</List>
