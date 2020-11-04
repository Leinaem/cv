import React from "react";
import ProgressBar from "./ProgressBar";

const Languages = () => {
  const skills = [
    {
      title: "languages",
      className: "languageDisplay",
      data: [
        { value: "Javascript", xp: 4 },
        { value: "CSS/SASS", xp: 4 },
        { value: "Php", xp: 2 },
      ],
    },
    {
      title: "Framework / librairie",
      className: "frameworkDisplay",
      data: [
        { value: "React", xp: 2 },
        { value: "Jquery", xp: 2 },
        { value: "MaterialUI", xp: 2 },
      ],
    },
    {
      title: "BDD",
      className: "bddDisplay",
      data: [
        { value: "Mysql", xp: 2.5 },
        { value: "GraphQL", xp: 1.5 },
        { value: "mongoDB", xp: 0.5 },
      ],
    },
  ];

  return (
    <div class="languageContent">
      {skills.map((item, key) => {
        return (
          <ProgressBar
            type={item.data}
            title={item.title}
            className={item.className}
          />
        );
      })}
    </div>
  );
};

export default Languages;
