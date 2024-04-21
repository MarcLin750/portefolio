import React, { FunctionComponent } from "react";
import '../styles/profile.css'

const Profile: FunctionComponent = () => {
  return (
    <div className="profile">
      {/* Présentation */}
      <div className="section">
        <h2>Présentation</h2>
        <p>
          Pendant deux ans, j'ai suivi un Brevet de Technicien Supérieur (BTS) en Services Informatiques aux Organisations (SIO), option Solutions Logicielles et Applications Métiers (SLAM), au Lycée René Descartes de Champs-sur-Marne (77420).
        </p>
        <h3>Compétences acquises</h3>
        <p>
          Cette formation m'a permis d'acquérir des compétences solides dans le domaine de l'informatique, avec un accent particulier sur les services et les solutions adaptés aux besoins des entreprises.
          Au cours de cette formation, j'ai développé des compétences essentielles en programmation et en gestion de projets informatiques. J'ai notamment travaillé sur un projet de création d'une application web pour une entreprise locale, ce qui m'a permis de mettre en pratique mes connaissances en PHP, SQL, JAVA, HTML et CSS. J'ai également étudié la conception de bases de données et les méthodes de développement agile, ce qui m'a permis de comprendre les processus de création logicielle.
        </p>
        <h3>Objectifs professionnels</h3>
        <p>
          Mon objectif professionnel à court terme est de trouver un emploi en tant que développeur d’application / web junior dans une entreprise dynamique et innovante. À long terme, j'aspire à devenir chef de projet informatique et à diriger des équipes de développement sur des projets complexes et ambitieux.
        </p>
        <h3>Passion pour l'informatique</h3>
        <p>
          Je suis passionné par l'informatique et je suis déterminé à poursuivre une carrière dans ce domaine. J'ai hâte de mettre mes compétences au service d'une entreprise et de contribuer à la réussite de ses projets informatiques.
        </p>
      </div>

      {/* Expériences professionnelles */}
      <div className="section">
        <h2>Expériences professionnelles</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">DIGICAB - Développeur (Stagiaire DevOps)</h3>
            <p className="card-text">
              Développement d’applications web avec Meteor.JS, gestion d’API Paxe8, stockage des données dans une base MongoDB.
            </p>
            <p className="card-text">Paris</p>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h3 className="card-title">SAP France - Stagiaire Développeur / UI</h3>
            <p className="card-text">
              Développement d’applications avec React.JS, récupération des données de l’API Polar.
            </p>
            <p className="card-text">Levallois Perret</p>
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="section">
        <h2>Compétences</h2>
        <ul className="list-group">
          <li className="list-group-item">HTML / CSS / PHP</li>
          <li className="list-group-item">React.JS / Meteor.JS</li>
          <li className="list-group-item">MySQL / MongoDB</li>
          <li className="list-group-item">JavaScript / Java / JSON</li>
          <li className="list-group-item">Cloud Foundry</li>
          <li className="list-group-item">Python</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
