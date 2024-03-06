import React, { FunctionComponent } from "react";
import '../styles/nav-bar.css';

const NavBar: FunctionComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
              <div className="container-fluid">
                <img src="./images/logo.png" alt="Logo" />
                <a className="navbar-brand" href="/portfolio">Marc Lin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <p className="me-auto mb-2 mb-lg-0">PortFolio</p>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/portfolio">Projets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/portfolio">CV</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/portfolio">Veilles</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/portfolio"> Contact</a>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </nav>
        </div>
    )
}

export default NavBar;