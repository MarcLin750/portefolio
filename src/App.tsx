import React, { FunctionComponent, useState } from "react";
import Home from './pages/home';
import CV from "./pages/cv";
import Profile from "./pages/profile"; // Importez le composant du profil
import Footer from './component/footer'

import './styles/nav-bar.css';

const App: FunctionComponent = () => {
    const logoPath = require('./images/logo.png');
    const sunPath = require('./images/sun.png');
    const moonPath = require('./images/moon.png');
    
    const [activePages, setActivePages] = useState<string>('Home');
    
    function colorModFunction() {
      var element = document.body;
      element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light";
    }
  
    return(
        <div>
            <nav className="navbarPortfolio navbar navbar-expand-xl fixed-top bg-body" >
              <div className="container-fluid">
                <img src={logoPath} alt="logo" className="navbar-img" onClick={() => setActivePages('Home')} />
                <strong className="mx-4" onClick={() => setActivePages('Home')}>Marc Lin</strong>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <strong className="me-auto">PortFolio</strong>
                  <ul className="navbar-nav mx-3">
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" onClick={() => setActivePages('Profile')}><strong>Profil</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" onClick={() => setActivePages('CV')}><strong>CV</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Projets</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Veilles</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Contact</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center form-control">
                      <div className="form-color-mode">
                        <img src={sunPath} alt="sun" className="navbar-img-color-mode" />
                          <div className="switch-color-mode form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              onClick={() => colorModFunction()}
                            />
                          </div>
                        <img src={moonPath} alt="sun" className="navbar-img-color-mode"/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {activePages === 'Home' && (
                <Home />
            )}
            {activePages === 'Projet' && (
                <CV />
            )}
            {activePages === 'CV' && (
                <CV />
            )}
            {/* Ajoutez le profil ici */}
            {activePages === 'Profile' && (
                <Profile />
            )}
            {/* Fin du profil */}
            <Footer />
        </div>
    )
}

export default App;
