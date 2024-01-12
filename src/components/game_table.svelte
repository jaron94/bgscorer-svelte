<script>
  import { game } from "../js/store.js";

  $: players = $game.players || [];
  $: rows = Array($game.round)
    .fill(0)
    .map((_, i) => i + 1);
</script>

<div class="data-table">
  <table id="score_table">
    <thead>
      <tr>
        {#each players as player (player.name)}
          <th colspan="2" style="text-align:center;">{player.name}</th>
        {/each}
      </tr>
      <tr>
        {#each players as player (player.name)}
          <th class="numeric-cell">Bids</th>
          <th class="numeric-cell">Tricks</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr>
          {#each players as player (player.name)}
            <td class="numeric-cell"
              >{player.bids[row - 1] !== undefined
                ? player.bids[row - 1]
                : ""}</td
            >
            <td class="numeric-cell"
              >{player.ntricks[row - 1] !== undefined
                ? player.ntricks[row - 1]
                : ""}</td
            >
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
