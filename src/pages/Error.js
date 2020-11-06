import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const Error = () => {
  return (
    <div className="error">
      <div className="content">
        <h1>404</h1>
        <p>Cette page n'éxiste pas.</p>
        <NavLink exact to="/">
          <HomeIcon className="icon" fontSize="large" />
          <span className="pageLabel">Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
