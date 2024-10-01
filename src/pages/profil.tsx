import React, { FunctionComponent } from "react";
import "../styles/profile.css";
import SVG from "../component/svg";
import Linkedin from "../svg/linkedin";
import GitHub from "../svg/github";

const Profil: FunctionComponent = () => {

  const certif_openclassroom = require('../images/certification_openclassroom.png');
  const certif_openclassroom2 = require('../images/certification_openclassroom2.png');

  return (
    <div className="profil">
      {/* Présentation */}
      <div className="section">
        <h2>Présentation</h2>
        <p>
          Etudiant au sein de <a href="https://www.lyceecharlesdefoucauldsup.fr" target="_blank" rel="noreferrer">l'UFA Charles de Foucauld - Groupe Scolaire La Madone</a>, 
          je suis actuellement à la recherche d'une alternance pour cette <strong>License générale informatique de 3 ème année</strong>.
        </p>
        <h4>Parcours</h4>
        <p>
        Ayant obtenu un Baccalauréat Professionnel (<strong>BAC PRO</strong>) en Systèmes Numériques (<strong>SN</strong>) avec 
        une <strong>Mention Très Bien</strong> au <a href="https://pia.ac-paris.fr/serail/jcms/s1_1476599/fr/lycee-des-sciences-et-du-numerique-louis-armand-lycee-general-technologique-et-professionnel" target="_blank" rel="noreferrer">Lycée Louis-Armand</a>, 
        j'ai eu l'opportunité de suivre des cours d'algorithmie en Python au sein de ce lycée. Ces cours ont particulièrement 
        captivé mon intérêt et ont été déterminants dans le choix de ma poursuite d'études. C'est ainsi que j'ai décidé de 
        m'orienter vers un BTS spécialisé en développement informatique.
        <br/>
        J'ai suivi un Brevet de Technicien Supérieur (<strong>BTS</strong>)
        en Services Informatiques aux Organisations (<strong>SIO</strong>), option Solutions
        Logicielles et Applications Métiers (<strong>SLAM</strong>), durant 2 ans au <a href="https://www.rene-descartes.fr/" target="_blank" rel="noreferrer">Lycée René Descartes</a>. 
        L’ayant décroché avec une moyenne de <strong>14,36</strong>.
        </p>
        <h4>Objectifs professionnels</h4>
        <p>
          Mon objectif principal est de me concentrer sur la poursuite de mes études en vue de 
          l'obtention d'un diplôme d'ingénieur en informatique. Je suis déterminé à consacrer 
          mes efforts à l'apprentissage des connaissances et des compétences indispensables 
          pour réussir dans ce domaine en constante évolution. Je suis particulièrement 
          intéressé par l'étude en apprentissage, conscient de son rôle crucial dans 
          l'évolution dynamique de l'informatique.
        </p>
        <h4>Passion pour l'informatique</h4>
        <p>
          Je suis passionné par l'informatique et je suis déterminé à poursuivre
          une carrière dans ce domaine. J'ai hâte de mettre mes compétences au
          service d'une entreprise et de contribuer à la réussite de ses projets
          informatiques.
        </p>
        <a className="me-2" href="https://www.linkedin.com/in/marc-lin-80425a25a/" target="_blank" rel="noopener noreferrer"><strong><Linkedin/></strong></a>
        <a href="https://github.com/MarcLin750?tab=repositories/" target="_blank" rel="noopener noreferrer"><strong><GitHub/></strong></a>
      </div>
      <hr />
      <div className="section">
        <h3>Compétences acquises</h3>
          <p>
            Cette formation m'a permis d'acquérir des compétences solides dans le domaine de l'informatique, 
            avec un accent particulier sur les services et les solutions adaptés aux besoins des entreprises. 
            Au cours de celle-ci, j'ai développé des compétences essentielles en programmation et en gestion 
            de projets informatiques. J'ai notamment travaillé sur un projet scolaire d'une application 
            web pour la réservation en ligne de logement, mettant ainsi en pratique mes connaissances en PHP, SQL, 
            HTML et CSS. De plus, j'ai étudié la conception de bases de données, avec tout cela, j'ai pu comprendre 
            les processus de création logicielle.
          </p>
        <div className="border-bottom">
          <h2 className="title">Les outils utilisés : </h2>
        </div>
        <SVG />
      </div>
      <hr />
      <div className="section">
        <h2 className="mt-2">Certifications Open Class Room</h2>
        <button type="button" className="btn my-4" data-bs-toggle="modal" data-bs-target="#certif_openclassroom">
          <img className="certif_openclassroom" src={certif_openclassroom} alt="Certificertif_openclassroomcation" />
        </button>
        <div className="modal fade" id="certif_openclassroom" tabIndex={-1} aria-labelledby="certif_openclassroom" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="certif_openclassroom">Mes Certifications Open Class Room</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img className="certif_openclassroom2" src={certif_openclassroom2} alt="certif_openclassroom2" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="section mt-4">
        <div className="card p-4">
          <h2>UFA Charles de Foucauld</h2>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="col">
              <h4>
                Groupe Scolaire La Madone :
              </h4>
                <hr/>
                <ul>
                  <li>
                    <strong>License Générale Informatique</strong> 
                    <br /> 
                    Développement d'applications Web, Mobiles et Cybersécurité en alternance 
                    forme de jeunes développeurs d’applications dans le cadre d’une alternance 
                    Ecole - Entreprise en contrat d’apprentissage.
                  </li>
                  <br />
                  <li>
                    Conservatoire national des arts et métiers
                    <br /> 
                    Elle est organisée en partenariat avec le CNAM qui délivre le diplôme de la licence générale informatique.
                  </li>
                </ul>
            </div>
            <div className="col mb-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.380028792129!2d2.3585961124555594!3d48.89271579817019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e7cf6c9e843%3A0x18034a7698e92894!2sLyc%C3%A9e%20Charles%20de%20Foucauld%20-%20Groupe%20Scolaire%20La%20Madone!5e0!3m2!1sfr!2sfr!4v1727562533180!5m2!1sfr!2sfr" title="Localisation du Lycée René Descartes" width="100%" height="400px" style={{ border: '0' }} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
