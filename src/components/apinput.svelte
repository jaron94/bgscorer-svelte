<script>
  import { ListInput, ListItem } from "framework7-svelte";

  export let player_num;
</script>

<div class="apinput_row">
  <ListInput
    type="text"
    placeholder={player_num == 1 ? "Who deals first?" : " "}
    clearButton
    inputId={`P${player_num}`}
    class={player_num == 3 ? "last_pname" : ""}
    style={`display:${player_num <= 3 ? "flex" : "none"};`}
  />
  <ListItem smartSelect>
    <select>
      <option
        value="../assets/icons/adventurer-1685973664220.svg"
        selected
        data-option-image="../assets/icons/adventurer-1685973664220.svg"
        data-option-class="avatar-option"
      >
      </option>
      <option
        value="../assets/icons/adventurer-1685973671936.svg"
        data-option-image="../assets/icons/adventurer-1685973671936.svg"
        data-option-class="avatar-option"
      >
      </option>
    </select>
  </ListItem>
</div>

<style>
  .apinput_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
