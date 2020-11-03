import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="content">
        <h1>404</h1>
        <p>Cette pas n'éxiste pas !</p>
        <NavLink exact to="/" activeClassName="navActive">
          <span className="pageLabel">Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
