<script>
  import { Stepper, Button, f7 } from "framework7-svelte";
  import { game } from "../js/store.js";

  let record_div_margin_vert = "20px";
  $game.players.forEach((p) => {
    p.input_val = 0;
  });
  $: nms = $game.playerNames;
  $: num_cards = $game.getNumCards();
  let loading = false;
  let notification;

  function error_alert(msg) {
    f7.dialog.alert(msg, () => {
      loading = false;
    });
  }

  function showSuccessNotification(bidStage) {
    if (!notification) {
      notification = f7.notification.create({
        icon: '<i class="icon icon-f7"></i>',
        title: `${bidStage ? "Bids" : "Tricks"} recorded successfully!`,
        closeOnClick: true,
        closeTimeout: 2000,
      });
    }
    notification.open();
  }

  //   let bid_success = genSuccessNotification(true);
  //   let trick_success = genSuccessNotification(false);

  function handleClick() {
    loading = true;
    if ($game.bidStage) {
      try {
        $game = $game.recordBids();
        showSuccessNotification(true);
      } catch (e) {
        error_alert(e.message);
      }
    } else {
      try {
        $game = $game.recordTricks();
        $game.players.forEach((p) => {
          p.input_val = 0;
        });
        showSuccessNotification(false);
      } catch (e) {
        error_alert(e.message);
      }
    }
    setTimeout(() => {
      if (loading) {
        loading = false;
      }
    }, 1000);
  }
</script>

<div
  id="play_div"
  class="text-align-center"
  style="--record_div-margin-vertical: {record_div_margin_vert}"
>
  <div class="grid grid-cols-1 medium-grid-cols-2">
    {#each $game.getPlayerOrder() as player}
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
          bind:value={player.input_val}
        ></Stepper>
      </div>
    {/each}
  </div>
  <div id="record_div">
    <Button fill id="record" on:click={handleClick} preloader {loading}
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
