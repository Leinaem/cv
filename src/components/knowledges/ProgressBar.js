import React from "react";

const ProgressBar = (props) => {
  const { type, title, className } = props;

  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="years">
        <div>Années d'expérience</div>
        <div>
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
      <div className="skillContainer">
        {type.map((item, key) => {
          const xpYears = 4;
          const barSize = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={key} className="skill">
              <span>{item.value}</span>
              <div className="bar" style={{ width: barSize }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
