import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const Error = () => {
  return (
    <div className="error">
      <div className="content">
        <h1>404</h1>
        <p>Cette page n'éxiste pas.</p>
        <NavLink exact to="/">
          <Icon className="icon">home</Icon>
          <span className="pageLabel">Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
