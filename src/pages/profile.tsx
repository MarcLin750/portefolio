import React, { FunctionComponent } from "react";
import "../styles/profile.css";
import SVG from "../component/svg";

const Profile: FunctionComponent = () => {

  const certif_openclassroom = require('../images/certification_openclassroom.png');
  const certif_openclassroom2 = require('../images/certification_openclassroom2.png');

  return (
    <div className="profile">
      {/* Présentation */}
      <div className="section">
        <h2>Présentation</h2>
        <p>
          Etudiant au sein du <a href="https://www.rene-descartes.fr/" target="_blank" rel="noreferrer">Lycée René Descartes</a>, 
          j'ai suivi un Brevet de Technicien Supérieur (<strong>BTS</strong>)
          en Services Informatiques aux Organisations (<strong>SIO</strong>), option Solutions
          Logicielles et Applications Métiers (<strong>SLAM</strong>), depuis 2 ans.
        </p>
        <h4>Parcours</h4>
        <p>
        Ayant obtenu un Baccalauréat Professionnel (<strong>BAC PRO</strong>) en Systèmes Numériques (<strong>SN</strong>) avec 
        une <strong>Mention Très Bien</strong> au <a href="https://pia.ac-paris.fr/serail/jcms/s1_1476599/fr/lycee-des-sciences-et-du-numerique-louis-armand-lycee-general-technologique-et-professionnel" target="_blank" rel="noreferrer">Lycée Louis-Armand</a>, 
        j'ai eu l'opportunité de suivre des cours d'algorithmie en Python au sein de ce lycée. Ces cours ont particulièrement 
        captivé mon intérêt et ont été déterminants dans le choix de ma poursuite d'études. C'est ainsi que j'ai décidé de 
        m'orienter vers un BTS spécialisé en développement informatique.
        </p>
        <h4>Objectifs professionnels</h4>
        <p>
          Mon objectif professionnel à court terme est de trouver un emploi en
          tant que développeur d’application / web junior dans une entreprise
          dynamique et innovante. À long terme, j'aspire à devenir chef de
          projet informatique et à diriger des équipes de développement sur des
          projets complexes et ambitieux.
        </p>
        <h4>Passion pour l'informatique</h4>
        <p>
          Je suis passionné par l'informatique et je suis déterminé à poursuivre
          une carrière dans ce domaine. J'ai hâte de mettre mes compétences au
          service d'une entreprise et de contribuer à la réussite de ses projets
          informatiques.
        </p>
        <h5>Liens :</h5>
        <div className="navbar-nav ms-auto mb-5">
          <a className="nav-link col-lg-3 col-md-4" href="https://www.linkedin.com/in/marc-lin-80425a25a/" target="_blank" rel="noopener noreferrer"><strong>→ LinkedIn.</strong></a>
          <a className="nav-link col-lg-3 col-md-4" href="https://github.com/MarcLin750?tab=repositories/" target="_blank" rel="noopener noreferrer"><strong>→ GitHub.</strong></a>
        </div>
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
      <div className="section border-bottom">
        <h2 className="mt-2">Certification Open Class Room</h2>
        <button type="button" className="btn my-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img className="certif_openclassroom" src={certif_openclassroom} alt="Certification" />
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Mes Certifications</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img className="certif_openclassroom2" src={certif_openclassroom2} alt="Certification" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="card p-4">
          <h2>Lycée René Descartes</h2>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="col mb-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.729492734128!2d2.582931412637917!3d48.84429827121067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60e2c203280e7%3A0x68fd06317a618f69!2sLyc%C3%A9e%20Ren%C3%A9%20Descartes!5e0!3m2!1sfr!2sfr!4v1714330082747!5m2!1sfr!2sfr" title="Localisation du Lycée René Descartes" width="100%" height="400px" style={{ border: '0' }} loading="lazy" />
            </div>
            <div className="col">
              <h5>
                Propose deux formations d'études supérieures (BTS SIO) :
                <hr/>
                <ul>
                  <li>
                    SLAM: <br /> Formation axée sur le développement et la maintenance de solutions logicielles pour les entreprises.
                  </li>
                  <br />
                  <li>
                    SISR: <br /> Formation spécialisée dans la gestion des infrastructures informatiques et des réseaux d'entreprise.
                  </li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
