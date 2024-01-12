<script>
  import {
    Page,
    Navbar,
    NavRight,
    Link,
    Block,
  } from "framework7-svelte";
  import Apinput_div from "../components/apinput_div.svelte";
  import {game} from "../js/store.js";
</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar title="Setup Game">
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
  </Navbar>

  <!-- Page content -->
  <h3>Game ID: {$game.id}</h3>
  <h3>Players: {$game.playerNames}</h3>

  <Block>
    <Apinput_div />
  </Block>
</Page>
