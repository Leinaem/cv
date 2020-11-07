import React from "react";

const Experience = () => {
  return (
    <div className="experienceContent">
      <h3>Expériences</h3>
      <div className="xp">
        <h4>Developpeur Front-end</h4>
        <h5>2019 - 2020 : Medialis, Fontenay sous bois</h5>
        <p>
          Visant une amélioration des performances tout en restant soucieux des
          bonnes pratiques, une refonte complète de notre application est mise
          en place.
        </p>
        <p>
          J'y intègre une équipe Front-end dans laquelle nous utilisons{" "}
          <b>ReactJS</b> avec en support la bibliotèque <b>Material UI</b>,{" "}
          <b>Redux</b> pour la gestion du store, <b>GraphQL</b> et le client{" "}
          <b>Apollo</b> pour la communication avec le Back, Le style de nos
          composants est géré avec <b>SASS</b>.
        </p>
        <p>
          En <b>méthode agile</b>, notre gestion de projet se fait avec
          l'utilisation de la solution <b>GitLAb</b> pour l'intégration et la
          livraison continue.
        </p>
        <p>- ReactJS / SASS</p>
        <p>- GraphQL / Apollo</p>
        <p>- Redux</p>
        <p>- Material UI</p>
        <p>- Méthode agile / Scrum</p>
        <p>- Intégration continue</p>
      </div>
      <div className="xp">
        <h4>Développeur full stack</h4>
        <h5>2017 - 2018 : Medialis, Fontenay sous bois</h5>
        <p>
          Intégré à une équipe de 8 développeurs, ma mission principal est
          d’implémenter des modules et améliorer le fonctionnement d’une
          application web destinée aux professionnels de santé dans le secteur
          médico-social afin de faciliter le parcours de vie de personnes en
          difficulté.
        </p>
        <p>- PHP / JQuery</p>
        <p>- html / CSS</p>
        <p>- MySQL</p>
      </div>
      <div className="xp">
        <h4>Stagiaire</h4>
        <h5>MAi 2017 - Septembre 2017</h5>
        <p>- Création de maquettes, et intégration <b>HTML/CSS</b>.</p>
        <p>
          - Création de modules web en JQuery/AJAX avec choix et utilisations de
          bibliothèques JS selon les besoins.
        </p>
        <p>- Renforcement des connaissances <b>PHP</b> et <b>MySQL</b>.</p>
      </div>
    </div>
  );
};

export default Experience;
