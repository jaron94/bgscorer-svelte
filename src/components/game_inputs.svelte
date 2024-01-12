<script>
  import { Stepper, Button } from "framework7-svelte";
  import { game } from "../js/store.js";

  let record_div_margin_vert = "20px";
</script>

<div
  id="play_div"
  class="text-align-center"
  style="--record_div-margin-vertical: {record_div_margin_vert}"
>
  <div class="grid grid-cols-1 medium-grid-cols-2">
    {#each $game.players as player}
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
          value="0"
          min="0"
          wraps
          max={$game.getNumCards()}
        ></Stepper>
      </div>
    {/each}
  </div>
  <div id="record_div">
    <Button fill id="record"
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
