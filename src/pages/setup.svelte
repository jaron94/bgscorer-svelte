<script>
  import {
    Page,
    Navbar,
    NavRight,
    Link,
    Block,
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

  <Block>
    <Apinput_div />
  </Block>
</Page>
