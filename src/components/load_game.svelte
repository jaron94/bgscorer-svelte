<script>
  import { List, ListInput, Button } from "framework7-svelte";
</script>

<List id="load_game_div">
  <ListInput type="select" inputId="saved_game_id">
    <option value=""></option>
  </ListInput>
  <Button fill id="reload">Load Game</Button>
</List>
