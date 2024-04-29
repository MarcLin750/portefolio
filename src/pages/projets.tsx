import React, { FunctionComponent } from "react";
import '../styles/projets.css';

const Projets: FunctionComponent = () => {
    
    const CVVEN1 = require('../images/CVVEN1.png');
    const CVVEN2 = require('../images/CVVEN2.png');
    const CVVEN3 = require('../images/CVVEN3.png');
    const CVVEN4 = require('../images/CVVEN4.png');
    const CVVEN5 = require('../images/CVVEN5.png');
    const CVVEN6 = require('../images/CVVEN6.png');
    const CVVENDB = require('../images/CVVENDB.png');


    const GSB1 = require('../images/GSB1.png');
    const GSB2 = require('../images/GSB2.png');
    const GSBDB = require('../images/GSBDB.png');

    return (
        <div className="projets">
            <h1>Projets</h1>
            <hr />
            <div className="section">
                <h2>CVVEN MKSL <small>(2024)</small></h2>
                <a className="nav-link" href="https://github.com/MarcLin750/CVVEN" target="_blank" rel="noopener noreferrer"><strong>→ GitHub CVVEN</strong></a>
                <p>
                    Dans le cadre du projet CVVEN, développé en collaboration avec mes
                    collègues, notre objectif était de faciliter la réservation de logements
                    et d'équipements, et d'introduire la création de comptes ainsi que
                    l'authentification, enrichis par des fonctionnalités avancées. Cette
                    initiative nous a permis de consolider notre expertise avec le framework
                    CodeIgniter et d'affiner notre approche du travail d'équipe.
                </p>
                <p>
                    En préparation, notre équipe a élaboré des documents techniques complets,
                    incluant une carte mentale, ainsi qu'un Modèle Logique de Données (MLD) et
                    des diagrammes UML détaillés, jetant les bases d'une conception et d'une
                    implémentation méthodiques.
                </p>
                <h3>Ma Contribution</h3>
                <p>
                    Responsable de l'élaboration de la section réservation, mon travail
                    englobait la création de la structure de la table des logements en SQL,
                    la gestion des données saisies via les formulaires de réservation et la
                    présentation des informations aux utilisateurs. Cette responsabilité a
                    renforcé ma compréhension de l'architecture MVC, me permettant
                    d'approfondir ma maîtrise des principes de conception et des bonnes
                    pratiques associées.
                </p>
                <h3>Détails Techniques</h3>
                <p>
                    Pour intégrer une nouvelle page dans l'application, j'ai d'abord créé
                    un fichier correspondant dans le dossier "Views". Ensuite, dans le
                    contrôleur, j'ai récupéré cette vue pour l'afficher via la fonction
                    "return". La liaison entre la vue et l'utilisateur se fait par le biais
                    d'une route définie dans le fichier "Routes.php" des configurations,
                    faisant appel à la fonction du contrôleur précédemment mentionnée. Ce
                    processus est essentiel pour garantir une navigation fluide et une
                    structure logique au sein de l'application.
                </p>
                <p>
                    La compréhension et l'application du Modèle Conceptuel de Données (MCD)
                    étaient cruciales pour assurer une structure de données cohérente et
                    optimisée. Le MCD a servi de référence pour la définition des entités,
                    des relations et des contraintes, et a été un élément déterminant pour
                    l'intégrité et la performance de la base de données.
                </p>
                <div id="carouselCVVEN" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselCVVEN" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselCVVEN" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselCVVEN" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselCVVEN" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselCVVEN" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselCVVEN" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselCVVEN" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={CVVEN1} className="d-block w-100" alt="CVVEN1" style={{height: '58vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={CVVEN2} className="d-block w-100" alt="CVVEN2" style={{height: '58vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={CVVEN3} className="d-block w-100" alt="CVVEN3" style={{height: '58vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={CVVEN4} className="d-block w-100" alt="CVVEN4" style={{height: '58vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={CVVEN5} className="d-block w-100" alt="CVVEN5" style={{height: '58vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={CVVEN6} className="d-block w-100" alt="CVVEN6" style={{height: '58vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={CVVENDB} className="d-block w-100" alt="CVVENDB" style={{height: '58vh'}}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCVVEN" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselCVVEN" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <h5>Contributeurs:</h5>
                <ul>
                    <li>LIN Marc</li>
                    <li>GIANG Kevin</li>
                    <li>THAYAPARAN Senthooran</li>
                    <li>MAHADZERE Loïc</li>
                </ul>
            </div>
            <hr />
            <div className="section">
                <h2>GSB<small>(2024)</small></h2>
                <a className="nav-link" href="https://github.com/MarcLin750/TpJava/tree/main/GSB" target="_blank" rel="noopener noreferrer"><strong>→ GitHub GSB</strong></a>
                <p>
                    Dans le cadre de ma formation BTS SIO, j'ai travaillé sur le projet GSB,
                    une initiative pédagogique centrée sur le développement d'une application
                    Java pour la gestion des médicaments. Ce projet était l'occasion de
                    découvrir l'utilisation de JavaFX sur l'interface de développement
                    d'Eclipse.
                </p>
                <div id="carouselGSB" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselGSB" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselGSB" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselGSB" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={GSB1} className="d-block w-100" alt="GSB1" style={{height: '50vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={GSB2} className="d-block w-100" alt="GSB2" style={{height: '50vh'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={GSBDB} className="d-block w-100" alt="GSBDB" style={{height: '50vh'}}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselGSB" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselGSB" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projets;