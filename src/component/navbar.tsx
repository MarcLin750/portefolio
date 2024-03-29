import React, { FunctionComponent } from "react";
import '../styles/nav-bar.css';

const NavBar: FunctionComponent = () => {
  const logoPath = require('../images/logo.png');
  const sunPath = require('../images/sun.png');
  const moonPath = require('../images/moon.png');
  
  function myFunction() {
    var element = document.body;
    element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light";
  }

  return (
    <div>
        <nav className="navbarPortfolio navbar navbar-expand-sm fixed-top bg-body-tertiary">
          <div className="container-fluid">
            <a href="/portfolio">
              <img src={logoPath} alt="logo" className="navbar-img" />
            </a>
            <a className="navbar-brand" href="/portfolio">
              Marc Lin
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <strong className="me-auto">PortFolio</strong>
              <ul className="navbar-nav">
                <li className="nav-item m-1">
                  <a className="nav-link" href="/portfolio"><strong>Projets</strong></a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link" href="/portfolio"><strong>CV</strong></a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link" href="/portfolio"><strong>Veilles</strong></a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link" href="/portfolio"><strong>Contact</strong></a>
                </li>
                <li className="nav-item input-group align-items-center ">
                  <img src={sunPath} alt="sun" className="navbar-img-color-mode" />
                  <div className="form-check form-switch m-2">
                    <input
                      className="form-check-input form-control"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      onClick={() => myFunction()}
                    />
                  </div>
                  <img src={moonPath} alt="sun" className="navbar-img-color-mode"/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar;