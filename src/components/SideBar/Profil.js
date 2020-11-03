import React from "react";
import photo from "./../../assets/images/id-photo.jpg";

const Profil = () => {
  return (
    <div className="id">
      <div className="idContent">
        <img src={photo} alt="profil-pic" />
        <h3>Sébastien AGGOUNE</h3>
      </div>
    </div>
  );
};

export default Profil;
