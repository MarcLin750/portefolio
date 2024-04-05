import React, { FunctionComponent, useState } from "react";
import Home from './pages/home';
import CV from "./pages/cv";
import Footer from './component/footer'

import './styles/nav-bar.css';

const App: FunctionComponent = () => {
    const logoPath = require('./images/logo.png');
    const sunPath = require('./images/sun.png');
    const moonPath = require('./images/moon.png');
    
    const [activeNavItem, setActiveNavItem] = useState<string>('Home');
    
    function myFunction() {
      var element = document.body;
      element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light";
    }
  
    return(
        <div>
            <nav className="navbarPortfolio navbar navbar-expand-sm fixed-top bg-body-tertiary">
              <div className="container-fluid">
                <a onClick={() => setActiveNavItem('Home')}>
                  <img src={logoPath} alt="logo" className="navbar-img" />
                </a>
                <a className="navbar-brand" onClick={() => setActiveNavItem('Home')}>
                  Marc Lin
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <strong className="me-auto">PortFolio</strong>
                  <ul className="navbar-nav mx-3">
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" href="/portfolio"><strong>Projets</strong></a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-link" onClick={() => setActiveNavItem('CV')}><strong>CV</strong></a>
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
                              onClick={() => myFunction()}
                            />
                          </div>
                        <img src={moonPath} alt="sun" className="navbar-img-color-mode"/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {activeNavItem === 'Home' && (
                <Home />
            )}
            {activeNavItem === 'CV' && (
                <CV />
            )}

            <Footer />
        </div>
    )
}

export default App;