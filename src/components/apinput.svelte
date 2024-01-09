<script>
  import { ListInput, ListItem } from "framework7-svelte";
  import { onMount, onDestroy, tick } from "svelte";

  let component;
  let min_players = 2;
  let src = "../assets/icons/adventurer-1685973664220.svg";
  let ssinstance;
  onMount(async () => {
    await tick();
    ssinstance = component.smartSelectInstance();
    if (ssinstance) {
      ssinstance.on("change", () => {
        src = ssinstance.getValue();
      });
    }
  });

  onDestroy(() => {
    if (ssinstance) {
      ssinstance.off("change");
    }
  });

  export let player_num;
  export let n_players;
  export let addPlayer;
  export let removePlayer;
  $: pinput_display = player_num <= n_players + 1 ? "flex" : "none";
  $: ainput_display = player_num <= n_players ? "flex" : "none";
  $: pinput_opacity = player_num == n_players + 1 ? 0.4 : 1;
</script>

<div class="apinput_row">
  <ListInput
    type="text"
    placeholder={player_num == 1 ? "Who deals first?" : " "}
    clearButton
    inputId={`P${player_num}`}
    style="display:{pinput_display}; opacity:{pinput_opacity};"
    on:change={() => {
      if (player_num == n_players + 1) {
        addPlayer();
      }
    }}
    on:inputClear={() => {
      if (player_num > min_players) {
        removePlayer();
      }
    }}
  />
  <ListItem
    smartSelect
    bind:this={component}
    smartSelectParams={{ openIn: "popover", closeOnSelect: true }}
    style="display:{ainput_display};"
  >
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
    <img {src} alt="avatar" class="avatar" />
  </ListItem>
</div>
