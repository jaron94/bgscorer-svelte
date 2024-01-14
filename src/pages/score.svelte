<script>
  import { Page, Navbar, NavRight, Link } from "framework7-svelte";
  import GameTable from "../components/score_table.svelte";
</script>

<Page name="score">
  <!-- Top Navbar -->
  <Navbar title="Scores">
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
  </Navbar>

  <GameTable />
</Page>
