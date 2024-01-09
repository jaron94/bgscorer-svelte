<script>
  import { ListInput, ListItem } from "framework7-svelte";
  import { onMount, onDestroy, tick } from "svelte";

  const avatar_svgs = Object.keys(import.meta.glob("../assets/icons/*.svg"));

  let component;
  let min_players = 2;
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
  export let last_pinput;
  export let addPlayer;
  export let removePlayer;
  $: is_last_pinput = player_num == last_pinput;

  let src = avatar_svgs[player_num - 1];
</script>

<div class="apinput_row">
  <ListInput
    type="text"
    placeholder={player_num == 1
      ? "Who deals first?"
      : player_num == 2
        ? "Who leads first?"
        : " "}
    clearButton
    inputId={`P${player_num}`}
    style="display:flex; opacity:{is_last_pinput ? 0.4 : 1};"
    on:change={() => {
      if (is_last_pinput) {
        addPlayer();
      }
    }}
    on:inputClear={() => {
      if (player_num > min_players) {
        removePlayer(player_num);
      }
    }}
  />
  <ListItem
    smartSelect
    bind:this={component}
    smartSelectParams={{ openIn: "popover", closeOnSelect: true }}
    style="display:{is_last_pinput ? 'none' : 'flex'};"
  >
    <select>
      {#each avatar_svgs as avatar_svg, i}
        <option
          value={avatar_svg}
          data-option-image={avatar_svg}
          data-option-class="avatar-option"
          selected={i === player_num - 1}
        ></option>
      {/each}
    </select>
    <img {src} alt="avatar" class="avatar" />
  </ListItem>
</div>
