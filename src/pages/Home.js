import React from "react";

const Home = () => {
  const a = "aa";
  return (
    <div className="home">
      <div className="content">
        <h1>Sébastien AGGOUNE</h1>
        <h2>Développeur Front-end</h2>
        <div className="pdf">
          <a href="./media/sebastien-aggoune.pdf" target="_blank" download>
            Télécharger pdf
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
