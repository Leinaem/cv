import Contact from "./Contact";
import Knowledges from "./Knowledges";
import Home from "./Home";
import Error from "./Error";

const RouteList = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
  {
    path: "/knowledges",
    exact: true,
    component: Knowledges,
  },
  {
    component: Error,
  },
];

export default RouteList;
