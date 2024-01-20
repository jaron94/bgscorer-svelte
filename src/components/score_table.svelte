<script>
  import { Card } from "framework7-svelte";
  import { game } from "../js/store.js";

  $: players = $game.players;
  $: rounds = Array($game.round)
    .fill(0)
    .map((_, i) => i + 1);

  function replaceUndefined(val) {
    return val === undefined ? "" : val;
  }

  function getBgColor(bid, ntricks) {
    if (ntricks === undefined) {
      return "";
    }
    return bid === ntricks ? "#00FF00" : "#FF0000";
  }
</script>

<Card class="data-table data-table-init">
  <table id="score_table">
    <thead>
      <tr>
        <th class="label-cell" rowspan="2">Round</th>
        {#each players as player (player.name)}
          <th colspan="3" class="xsmall-only player-header">{player.name}</th>
          <th rowspan="2" class="not-xsmall">{player.name}</th>
        {/each}
      </tr>
      <tr>
        {#each players as player (player.name)}
          <th class="xsmall-only header2 bid-col">B</th>
          <th class="xsmall-only header2">T</th>
          <th class="xsmall-only header2 score-col">S</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rounds as round, i}
        <tr>
          <td class="label-cell">{round}</td>
          {#each players as player (player.name)}
            <td class="xsmall-only">{replaceUndefined(player.bids[i])}</td>
            <td class="xsmall-only">{replaceUndefined(player.ntricks[i])}</td>
            <td
              style="background-color: {getBgColor(
                player.bids[i],
                player.ntricks[i],
              )}">{replaceUndefined(player.cumulativeScores[i])}</td
            >
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</Card>

<style>
  #score_table {
    --f7-table-cell-padding-horizontal: 4px;
    --f7-table-edge-cell-padding-horizontal: 4px;
  }

  th,
  td {
    text-align: center;
    min-width: 25px;
  }

  th.header2::before,
  th.header2.score-col::after,
  th.label-cell::after {
    content: "";
    position: absolute;
    background-color: var(--f7-table-cell-border-color);
    display: block;
    z-index: 15;
    top: 0;
    bottom: auto;
    right: auto;
    left: 0;
    height: 1px;
    width: 100%;
    transform-origin: 50% 0%;
    transform: scaleY(calc(1 / var(--f7-device-pixel-ratio)));
  }

  th.header2.score-col::after,
  th.label-cell::after {
    top: auto;
    bottom: 0;
    right: 0;
    left: auto;
    width: 1px;
    height: 100%;
    transform-origin: 50% 0%;
    transform: scaleX(calc(1 / var(--f7-device-pixel-ratio)));
  }

  th.label-cell::after {
    height: 50%;
  }

  @media screen and (min-width: 480px) {
    .not-xsmall {
      display: none;
    }
  }
</style>
