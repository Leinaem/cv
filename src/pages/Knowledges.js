import React from "react";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import OtherSkills from "../components/knowledges/OtherSkills";
import Hobbies from "../components/knowledges/Hobbies";

const Knowledges = () => {
  return (
    <div class="knowledges">
      <div class="knowledgeContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
