import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="navActive">
            <Icon className="icon">home</Icon>
            <span className="pageLabel">Accueil</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/knowledges" activeClassName="navActive">
            <Icon className="icon">analytics</Icon>
            <span className="pageLabel">Compétences</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="navActive">
            <Icon className="icon">perm_contact_calendar</Icon>
            <span className="pageLabel">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
