import React from "react";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import MovieIcon from "@material-ui/icons/Movie";

const Hobbies = () => {
  return (
    <div className="hobbiesContent">
      <h3>Loisirs</h3>
      <div className="lists">
        <ul>
          <li>
            <i>
              <FlightTakeoffIcon />
            </i>
            Voyages
          </li>
          <li>
            <i>
              <SportsBasketballIcon />
            </i>
            Sport
          </li>
        </ul>
        <ul>
          <li>
            <i>
              <SportsEsportsIcon />
            </i>
            Jeux-vidéo
          </li>
          <li>
            <i>
              <MovieIcon />
            </i>
            Films / Séries
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
