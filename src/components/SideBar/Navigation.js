import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="navActive">
            <HomeIcon className="icon" />
            <span className="pageLabel">Accueil</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/knowledges" activeClassName="navActive">
            <AssessmentIcon className="icon" />
            <span className="pageLabel">Compétences</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="navActive">
            <PermContactCalendarIcon className="icon" />
            <span className="pageLabel">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
