<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>bgScorer</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge>bgScorer</NavTitleLarge>
  </Navbar>

  <!-- Page content -->
  <Block>
    <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

    <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
  </Block>

  <BlockTitle>Navigation</BlockTitle>
  <!-- Create a list containing an each block that generates 7 apinputs -->
  <List>
    {#each players as player_num}
    <Apinput {player_num} />
    {/each}
  </List>

  <BlockTitle>Modals</BlockTitle>
  <Block class="grid grid-cols-2 grid-gap">
    <Button fill popupOpen="#my-popup">Popup</Button>
    <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block class="grid grid-cols-2 grid-gap">
    <Button fill panelOpen="left">Left Panel</Button>
    <Button fill panelOpen="right">Right Panel</Button>
  </Block>

  <List strong inset dividersIos>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List>
</Page>
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
    Button
  } from 'framework7-svelte';
  import Apinput from '../components/apinput.svelte';

  let players = [1, 2, 3, 4, 5, 6, 7];
</script>