<script>
  import { onMount } from "svelte";

  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter,
  } from "framework7-svelte";

  import routes from "../js/routes";

  let sw;

  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === "production") {
    sw = {
      path: "/bgscorer-svelte/service-worker.js",
      scope: "/bgscorer-svelte/",
    };
  } else {
    sw = {};
  }

  // Framework7 Parameters
  let f7params = {
    name: "bgScorer", // App name
    theme: "auto", // Automatic theme detection

    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: sw,
  };
  // Login screen demo data
  let username = "";
  let password = "";

  function alertLoginData() {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      },
    );
  }
  onMount(() => {
    f7ready(() => {
      // Call F7 APIs here
    });
  });
</script>

<App {...f7params}>
  <!-- Left panel with cover effect-->
  <Panel left cover dark>
    <View>
      <Page>
        <Navbar title="Left Panel" />
        <Block>Left panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <!-- Right panel with reveal effect-->
  <Panel right reveal dark>
    <View>
      <Page>
        <Navbar title="Right Panel" />
        <Block>Right panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <!-- Views/Tabs container -->
  <Views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <Toolbar tabbar icons bottom>
      <Link
        tabLink="#view-home"
        tabLinkActive
        iconIos="f7:house_fill"
        iconMd="material:home"
        text="Home"
      />
      <Link
        tabLink="#view-play"
        iconIos="f7:play_fill"
        iconMd="material:play_arrow"
        text="Play"
      />
      <Link
        tabLink="#view-score"
        iconIos="f7:table_fill"
        iconMd="material:table_chart"
        text="Scores"
      />
    </Toolbar>

    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive url="/" />

    <!-- Play View -->
    <View id="view-play" name="play" tab url="/play/" />

    <!-- Settings View -->
    <View id="view-score" name="score" tab url="/score/" />
  </Views>

  <!-- Popup -->
  <Popup id="my-popup">
    <View>
      <Page>
        <Navbar title="Popup">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>Popup content goes here.</p>
        </Block>
      </Page>
    </View>
  </Popup>

  <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            bind:value={username}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            bind:value={password}
          />
        </List>
        <List>
          <ListButton title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login
          Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>
</App>
