import React, { FunctionComponent } from "react";

const NavBar: FunctionComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/portfolio">Marc Lin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/portefolionavbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/portfolio">Projets</a>
                    <a className="nav-link active" href="/portfolio">CV</a>
                    <a className="nav-link active" href="/portfolio">Veilles</a>
                    <a className="nav-link active" href="/portfolio"> Contact</a>
                  </div>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default NavBar;