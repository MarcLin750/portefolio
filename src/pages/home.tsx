import React, { FunctionComponent, useState, useEffect } from "react";
import "../styles/home.css";

interface HomeProps {
    setActivePage: (page: string) => void;
}

const Home: FunctionComponent<HomeProps> = ({ setActivePage }) => {
  const [text, setText] = useState("");
  const [dots, setDots] = useState("");

  const firstPart = "Je m'appelle Marc Lin, étudiant en Brevet De Technicien Supérieur (BTS) Service Informatique aux Organisations (SIO), Solutions Logicielles et Applications Métiers (SLAM) ";
  const secondPart = "Passionné par les logiciels et fasciné par l’expansion de l’industrie des technologies ces dernières années.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText((prevText) => {
        const nextChar = firstPart[currentIndex];
        currentIndex++;
        return prevText + nextChar;
      });
      if (currentIndex === firstPart.length) {
        clearInterval(interval);
        animateDots();
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const animateDots = () => {
    let dotsCount = 1;
    const dotsInterval = setInterval(() => {
      setDots(".".repeat(dotsCount));
      dotsCount = (dotsCount + 1) % 4; // Pour boucler entre 1, 2, 3, puis 0 points
    }, 400);

    return () => clearInterval(dotsInterval);
  };

  return (
    <div className="home">
      <div className="card position-absolute home-card">
        <div className="card-body">
            <h4>Bienvenue sur mon portfolio.</h4>
            <h2>
              <strong className="home-card-strong">
                {text}
                {dots && <span className="dot-animation">{dots}</span>}
              </strong>
            </h2>
            <p>
              {secondPart}
              <div className="navbar-nav ms-auto">
                <a className="nav-link col-lg-3 col-md-4" onClick={() => setActivePage('Profile')}><strong>→ En savoir plus.</strong></a>
                <a className="nav-link col-lg-3 col-md-4" href="https://www.linkedin.com/in/marc-lin-80425a25a/" target="_blank" rel="noopener noreferrer"><strong>→ LinkedIn.</strong></a>
              </div>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
