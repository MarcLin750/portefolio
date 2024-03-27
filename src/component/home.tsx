import React, { FunctionComponent } from "react";
import '../styles/home.css';

const Home: FunctionComponent = () => {

    return(
        <div className="home">
            <div className="home_title">
                <h4>Bienvenue sur mon portfolio,</h4>
                <h2>Je m'appelle <strong>Marc Lin.</strong></h2>
            </div>
        </div>
    )
}

export default Home;