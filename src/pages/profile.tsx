import React, { FunctionComponent } from "react";

const Profile: FunctionComponent = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Profil</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>Nom: Marc Lin</p>
              <p>Âge: 20 ans</p>
              <p>Formation: Brevet De Technicien Superieur (BTS BAC+2) Service Informatique aux Organisations en Solutions Logicielles et Applications Métiers (SLAM)</p>
              <p>Compétences: Développement web, Cybersécurité, React, Node.js, etc.</p>
            </div>
            <div className="col-md-6">
              <p>Langues: Français (natif), Anglais (intermédiaire), Chinois (courant)</p>
              <p>Expérience: Stagiaire DevOps chez DIGICAB, Stagiaire Développeur/UI chez SAP France, etc.</p>
              <p>Centres d'intérêts: Développement, Piano, Art, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
