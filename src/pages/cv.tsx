import React, { FunctionComponent } from "react";
import '../styles/cv.css';

const CV: FunctionComponent = () => {
    // const CvPdf = require('../doc/CV_Marc_Lin.pdf');
    const Header = () => (
      <div className="header">
        <h1>Marc LIN</h1>
        <p>Développeur | Stagiaire DevOps</p>
        <p>marclin750@gmail.com | 07 68 17 98 82</p>
        <p>Paris, France</p>
      </div>
    );
    
    // Experience Component
    const Experience = () => (
      <div className="experience">
        <h2>Expérience Professionnelle</h2>
        <p>DIGICAB - Stagiaire DevOps</p>
        <p>Développement d’application web / Meteor.JS.</p>
        <p>Gestion d’API Paxe8.</p>
        <p>Stockage des données dans une base MongoDB.</p>
        <p>Janvier - Mars 2024</p>
      </div>
    );
    
    // Education Component
    const Education = () => (
      <div className="education">
        <h2>Éducation</h2>
        <p>BREVET DE TECHNICIEN SUPERIEUR (BAC + 2)</p>
        <p>Lycée René des Cartes, 77420 Champs-sur-Marne</p>
        <p>Service Informatique aux Organisations en Solutions Logicielles et Applications Métiers.</p>
        <p>2019 - 2022</p>
      </div>
    );
    
    // Skills Component
    const Skills = () => (
      <div className="skills">
        <h2>Compétences</h2>
        <p>HTML / CSS / PHP</p>
        <p>React.JS / Meteor.JS</p>
        <p>MySQL / MangoDB</p>
        <p>JS / JAVA / JSON</p>
        <p>Cloud foundry</p>
        <p>Python</p>
      </div>
    );
    
    // Interests Component
    const Interests = () => (
      <div className="interests">
        <h2>Centre d'intérêts</h2>
        <p>Développement - Création d’application / site web.</p>
        <p>Projet personnel - Suivi des cours en ligne de création de jeu vidéo.</p>
        <p>Art - Passionné d’art digital, des animés et des films du studio Ghibli.</p>
      </div>
    );

    return(
      <div className="cv">
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Interests />
      </div>
    )
}

export default CV;