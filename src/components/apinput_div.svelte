<!-- {@debug disp_players, actual_players} -->

<script>
  import { List, Button } from "framework7-svelte";
  import Apinput from "./apinput.svelte";
  import LoadGame from "./load_game.svelte";
  import {game} from "../js/store.js";
  import {Player} from "../js/player.js";
  import {BettingGame} from "../js/game.js";

  const avatar_svgs = Object.keys(import.meta.glob("../assets/icons/*.svg"));

  let disp_players = [new Player(1), new Player(2), new Player(3)];
  let actual_players = disp_players.slice(0, -1);
  let max_players = 7;

  $: last_pinput = disp_players.filter(x => !actual_players.map((p) => p.id).includes(x.id))[0];

  function addPlayer() {
    actual_players = disp_players;
    if (disp_players.length < max_players) {
      disp_players = [...disp_players, new Player(Math.max(...(disp_players.map(x => x.id))) + 1)];
    }
  }

  function removePlayer(pnum) {
    actual_players = actual_players.filter(x => x.id != pnum);
    disp_players = disp_players.filter(x => x.id != pnum);
    if (actual_players.length == max_players - 1) {
      addPlayer();
    }
  }

  function setupGame() {
    const new_game = new BettingGame(Date.now());
    new_game.addPlayers(actual_players);
    game.set(new_game)
  }
</script>

<!-- <h3>{#each avatars as avatar}
<img src={avatar} alt="avatar" class="avatar" />
{/each}
</h3> -->
<List>
  {#each disp_players as player (player.id)}
    <Apinput {player} {last_pinput} {addPlayer} {removePlayer} {avatar_svgs} />
  {/each}
</List>
<Button fill id="set_up" on:click={setupGame}>New Game</Button>
<LoadGame />
