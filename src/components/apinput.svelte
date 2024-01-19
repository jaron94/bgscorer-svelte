<script>
  import { ListInput, ListItem } from "framework7-svelte";
  import { onMount, onDestroy, tick } from "svelte";

  let component;
  let min_players = 2;
  let ssinstance;
  onMount(async () => {
    await tick();
    ssinstance = component.smartSelectInstance();
    if (ssinstance) {
      ssinstance.on("change", () => {
        player.avatar = ssinstance.getValue();
      });
    }
  });

  onDestroy(() => {
    if (ssinstance) {
      ssinstance.off("change");
    }
  });

  export let player;
  export let last_pinput;
  export let addPlayer;
  export let removePlayer;
  export let avatar_svgs;
  $: is_last_pinput = player.id == last_pinput.id;

  player.avatar = avatar_svgs[player.id - 1];

  // export let src = avatar_svgs[player.id - 1];
</script>

<div class="apinput_row">
  <ListInput
    type="text"
    placeholder={player.id == 1
      ? "Who deals first?"
      : player.id == 2
        ? "Who leads first?"
        : " "}
    clearButton
    inputId={`P${player.id}`}
    style="display:flex; opacity:{is_last_pinput ? 0.4 : 1};"
    bind:value={player.name}
    on:change={() => {
      if (is_last_pinput) {
        addPlayer();
      }
    }}
    on:inputClear={() => {
      if (player.id > min_players) {
        removePlayer(player.id);
      }
    }}
  />
  <ListItem
    smartSelect
    bind:this={component}
    smartSelectParams={{
      openIn: "popover",
      closeOnSelect: true,
      cssClass: "avatar-popover",
    }}
    style="display:{is_last_pinput ? "none" : "flex"};"
  >
    <img src={player.avatar} alt="avatar" class="avatar" slot="media" />
    <select>
      {#each avatar_svgs as avatar_svg, i}
        <option
          value={avatar_svg}
          data-option-image={avatar_svg}
          data-option-class="avatar-option"
          selected={i === player.id - 1}
        ></option>
      {/each}
    </select>
  </ListItem>
</div>
