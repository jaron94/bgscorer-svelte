<script>
  import { Stepper, Button, f7 } from "framework7-svelte";
  import { game } from "../js/store.js";

  let record_div_margin_vert = "20px";
  let input_vals = Array($game.players.length).fill(0);
  let num_cards = $game.getNumCards();

  let x = $game.getPlayerData().bids;

  function handleClick() {
    if ($game.bidStage) {
      try {
        $game = $game.recordBids(input_vals);
      } catch (e) {
        f7.dialog.alert(e.message);
      }
    } else {
      try {
        $game = $game.recordTricks(input_vals);
        input_vals = Array($game.players.length).fill(0);
      } catch (e) {
        f7.dialog.alert(e.message);
      }
    }
  }
</script>

<div
  id="play_div"
  class="text-align-center"
  style="--record_div-margin-vertical: {record_div_margin_vert}"
>
  <div class="grid grid-cols-1 medium-grid-cols-2">
    {#each $game.players as player, i}
      <div class="ginput_div">
        <img
          src="../assets/icons/adventurer-1685973664220.svg"
          alt="avatar"
          class="avatar"
        />
        <strong class="display-block">{player.name}</strong>
        <Stepper
          name={player.name}
          fill
          min="0"
          wraps
          max={num_cards}
          bind:value={input_vals[i]}
        ></Stepper>
      </div>
    {/each}
  </div>
  <div id="record_div">
    <Button fill id="record" on:click={handleClick}
      >{$game.bidStage ? "Enter Bids" : "Enter Results"}</Button
    >
  </div>
</div>

<style>
  #play_div {
    height: 100%;
  }

  .ginput_div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .grid {
    height: calc(
      100% - var(--f7-button-height) - var(--record_div-margin-vertical)
    );
    align-content: space-around;
  }

  #record_div {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: var(--record_div-margin-vertical);

    & .button {
      width: 50%;
    }
  }
</style>
