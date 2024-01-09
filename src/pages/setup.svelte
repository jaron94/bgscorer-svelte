<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button,
  } from "framework7-svelte";
  import Apinput_div from "../components/apinput_div.svelte";
</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar title="Setup Game">
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
  </Navbar>

  <!-- Page content -->
  <Apinput_div />
</Page>
