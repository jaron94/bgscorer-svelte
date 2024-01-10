<script>
  import {
    Page,
    Navbar,
    NavRight,
    Link,
    Button,
  } from "framework7-svelte";
  import Apinput_div from "../components/apinput_div.svelte";
  import LoadGame from "../components/load_game.svelte";
</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar title="Setup Game">
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
  </Navbar>

  <!-- Page content -->
  <div id="setup_div">
    <Apinput_div />
    <Button fill id="set_up">New Game</Button>
    <LoadGame />
  </div>
</Page>
