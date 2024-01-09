<script>
  import { List, Button } from "framework7-svelte";
  import Apinput from "../components/apinput.svelte";

  let players = [1, 2, 3, 4, 5, 6, 7];
  let n_players = 2;

  function addPlayer() {
    n_players = n_players + 1;
  }

  function removePlayer() {
    n_players = n_players - 1;
  }
</script>

<List>
  {#each players as player_num}
    <Apinput {player_num} {n_players} {addPlayer} {removePlayer} />
  {/each}
</List>
