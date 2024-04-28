import React, { FunctionComponent, useState, useEffect } from "react";
import "../styles/home.css";

interface HomeProps {
    setActivePage: (page: string) => void;
}

const Home: FunctionComponent<HomeProps> = ({ setActivePage }) => {
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(true);  // État pour gérer le clignotement du curseur
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);  // Nouvel état pour contrôler l'affichage des contenus supplémentaires

  const firstPart = "Je m'appelle Marc Lin, étudiant en Brevet De Technicien Supérieur, Service Informatique aux Organisations, option Solutions Logicielles et Applications Métiers (BAC+2)";
  const secondPart = "Passionné par les logiciels et fasciné par l’expansion de l’industrie des technologies ces dernières années.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText((prevText) => {
        if (currentIndex < firstPart.length) {
          const nextChar = firstPart[currentIndex++];
          return prevText + nextChar;
        } else {
          clearInterval(interval);  // Arrêter la frappe une fois le texte complet affiché
          setShowAdditionalContent(true);  // Activer l'affichage du contenu supplémentaire seulement après la fin de la frappe
          return prevText;
        }
      });
    }, 40);  // Vitesse de frappe des caractères

    // S'assurer de nettoyer l'intervalle en cas de démontage du composant
    return () => clearInterval(interval);
  }, []);

  // Fonction pour animer le curseur après que tout le texte a été écrit
  useEffect(() => {
    if (showAdditionalContent) {
      const cursorInterval = setInterval(() => {
        setCursor(prevCursor => !prevCursor);  // Inverser l'état du curseur pour le faire clignoter
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [showAdditionalContent]);

  return (
    <div className="home">
      <div className="card position-absolute home-card">
        <div className="card-body">
          <h4>Bienvenue sur mon portfolio.</h4>
          <h2>
            <strong className="home-card-strong">
              {text}
              {cursor && <span className="cursor">|</span>}
            </strong>
          </h2>
          <p>
            {secondPart}
            <div className="navbar-nav ms-auto">
              <a className="nav-link col-lg-3 col-md-4" href="#" onClick={() => setActivePage('Profile')}><strong>→ En savoir plus.</strong></a>
              <a className="nav-link col-lg-3 col-md-4" href="https://www.linkedin.com/in/marc-lin-80425a25a/" target="_blank" rel="noopener noreferrer"><strong>→ LinkedIn.</strong></a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
