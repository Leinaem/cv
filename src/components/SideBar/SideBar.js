import React from "react";
import Navigation from "./Navigation";
import Profil from "./Profil";
import SocialNetwork from "./SocialNetwork";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Profil />
      <Navigation />
      <SocialNetwork />
    </div>
  );
};

export default SideBar;
