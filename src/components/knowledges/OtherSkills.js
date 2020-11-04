import React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const OtherSkills = () => {
  return (
    <div className="otherSkillsContent">
      <h3>Autres compétences</h3>
      <div className="lists">
        <ul>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            NodeJS (express)
          </li>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            Git
          </li>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            Jira
          </li>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            Webpack
          </li>
        </ul>
        <ul>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            Méthode Agile / Scrum
          </li>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            Anglais intermédiaire
          </li>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            Photoshop
          </li>
          <li>
            <i>
              <CheckBoxIcon fontSize="small" />
            </i>
            Windows / Linux
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
