import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouteList from "./pages/RouteList";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="fullPageContainer">
        <SideBar />
        <div className="pageContent">
          <Switch>
            {RouteList.map((item, key) => (
              <Route
                path={item.path}
                exact={item.exact}
                component={item.component}
                key={key}
              />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
