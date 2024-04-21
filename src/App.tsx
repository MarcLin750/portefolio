import React, { FunctionComponent, useState } from "react";
import Home from './pages/home';
import CV from "./pages/cv";
import Profile from "./pages/profile"; // Importez le composant du profil
import Footer from './component/footer'

import './styles/nav-bar.css';

const App: FunctionComponent = () => {
    const logoPath = require('./images/logo.png');
    
    const [activePage, setActivePage] = useState<string>('Home');
    
    function colorModFunction() {
      var element = document.body;
      element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light";
    }

    const handleSetActivePage = (page: string) => {
      setActivePage(page);
    };
  
    return(
        <div>
            <nav className="navbarPortfolio navbar navbar-expand-xl fixed-top bg-body border border-2 shadow">
              <div className="container-fluid">
                <a href="#top" onClick={() => handleSetActivePage('Home')}>
                  <img src={logoPath} alt="logo" className="navbar-img" />
                </a>
                <a className="mx-4 nav-link" href="#top" onClick={() => handleSetActivePage('Home')}><strong>Marc Lin</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <strong className="me-auto">PortFolio</strong>
                  <ul className="navbar-nav mx-3">
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="#top" onClick={() => handleSetActivePage('Profile')}><strong>Profil</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="#top" onClick={() => handleSetActivePage('CV')}><strong>CV</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Projets</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Experience</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Veilles</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Contact</strong></a>
                    </li>
                    <li className="nav-item">
                      <div className="d-flex align-items-center">
                        <div className="form-color-mode flex-grow-1">
                          <select
                            className="form-select"
                            style={{ width: "70px" }}
                            aria-label="Sélectionner un mode de couleur"
                            onChange={(e) => e.target.value === 'light' ? colorModFunction() : colorModFunction()}
                          >
                            <option value="sun">☀️</option>
                            <option value="moon">🌑</option>
                          </select>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {activePage === 'Home' && (
                <Home setActivePage={handleSetActivePage} />
            )}
            {activePage === 'Projet' && (
                <CV />
            )}
            {activePage === 'CV' && (
                <CV />
            )}
            {/* Ajoutez le profil ici */}
            {activePage === 'Profile' && (
                <Profile />
            )}
            {/* Fin du profil */}
            <Footer />
        </div>
    )
}

export default App;
