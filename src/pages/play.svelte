<script>
  import { Page, Navbar, NavRight, Link, f7 } from "framework7-svelte";
  import GameInputs from "../components/game_inputs.svelte";

  import { game } from "../js/store.js";
  import { BettingGame } from "../js/game.js";
  import { Player } from "../js/player.js";

  const player_ids = [1, 2, 3, 4, 5, 6, 7, 8];

  let players = player_ids.map(function (id) {
    let p = new Player(id);
    p.name = "Player " + id;
    return p;
  });

  let dev_game = new BettingGame("dev");
  dev_game.addPlayers(players);
  dev_game.shortGame = true;

  game.set(dev_game);

  let game_over = false;

  const stop = game.subscribe((g) => {
    if (g.isOver()) {
      f7.dialog.alert("Game Over!", () => {
        game_over = true;
      });
    }
  });

  $: {
    if (game_over) {
      stop();
      f7.tab.show("#view-score");
    }
  }
</script>

<Page name="Play">
  <!-- Top Navbar -->
  <Navbar title="Betting Game">
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
  </Navbar>

  <!-- Page content -->
  <div id="play_div" class="text-align-center">
    <GameInputs />
  </div>
</Page>

<style>
  #play_div {
    height: 100%;
  }
</style>
