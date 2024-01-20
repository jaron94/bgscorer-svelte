import SetupPage from "../pages/setup.svelte";
import PlayPage from "../pages/play.svelte";
import ScorePage from "../pages/score.svelte";

import NotFoundPage from "../pages/404.svelte";

var routes = [
  {
    path: "/",
    component: SetupPage,
  },
  {
    path: "/play/",
    component: PlayPage,
  },
  {
    path: "/score/",
    component: ScorePage,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
