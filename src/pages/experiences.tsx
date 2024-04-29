import React, { FunctionComponent } from "react";
import '../styles/experiences.css';

const Experiences: FunctionComponent = () => {
    return (
        <div className="experiences">
            <h1>Mes experiences en milieux professionnels</h1>
            <hr />
            <div className="section">
                <h2>SAP France <small>(Janvier - Mars 2024)</small></h2>
                <a className="nav-link" href="https://www.sap.com/france/index.html" target="_blank" rel="noopener noreferrer"><strong>→ En savoir plus.</strong></a>
                <p className="mt-2">
                    SAP France est une filiale de SAP SE, une entreprise allemande 
                    multinationale spécialisée dans les logiciels d'entreprise. En 
                    tant que filiale, elle joue un rôle essentiel dans la distribution 
                    et le support des produits SAP sur le marché français.
                    <br /><br />
                    Avec un capital de 11 934 288,80 €, SAP France est une Société 
                    Anonyme (SA). Cela signifie qu'elle est une entité commerciale 
                    dont le capital est constitué d'actions détenues par ses actionnaires. 
                    Ce statut est généralement choisi par les entreprises qui entreprennent 
                    des projets de grande envergure. L'effectif de SAP France est d'environ 1500 
                    salariés.
                </p>
                <h3>Cadre de la formation en milieu professionnel</h3>
                <p>
                    La formation s'est déroulée sur une période de 2 mois dans un cadre 
                    particulier, impliquant ma participation à un hackathon organisé au 
                    sein de l'entreprise. Ce hackathon réunissait plusieurs équipes 
                    travaillant sur des sujets variés tout en mettant en avant les 
                    technologies SAP et en favorisant l'innovation. Au cours de cet 
                    événement, j'ai eu l'opportunité d'apprendre React.js et de manipuler 
                    l'API Polar avec Python. Ma mission consistait à développer une 
                    application React.js permettant de récupérer les données envoyées 
                    depuis une autre API Python développée par un autre membre de l'équipe, 
                    puis de les afficher et de les manipuler.
                </p>
            </div>
            <hr />
            <div className="section">
                <h2>DIGICAB <small>(Mai - Juillet 2023)</small></h2>
                <a className="nav-link" href="https://www.linkedin.com/company/digicabsas/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer"><strong>→ En savoir plus.</strong></a>
                <p className="mt-2">
                    DIGICAB est un cabinet de conseil et d'ingénierie informatique spécialisé 
                    dans le cloud computing. En tant que partenaire de digitalisation pour 
                    les PME, DIGICAB accompagne ses clients dans leur transformation en 
                    fournissant des outils, des services et des conseils.
                    <br /><br />
                    C'est une Société par Actions Simplifiée (SAS) avec un capital de 1 000€ 
                    et un effectif de 3 à 5 salariés. Fondée en 2019 par Cédric Bigay, 
                    président de la société.
                </p>
                <h3>Cadre de la formation en milieu professionnel</h3>
                <p>
                    La formation d'une durée d'un mois avait pour objectif de créer une 
                    application permettant de récupérer les factures à partir d'une API 
                    existante, puis de les afficher dans l'application Meteor.js. J'ai 
                    également suivi une formation sur Meteor.js et sur l'automatisation 
                    de la création d'un token.
                </p>
            </div>
        </div>
    )
}

export default Experiences;