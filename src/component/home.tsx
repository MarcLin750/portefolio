import React, { FunctionComponent } from "react";
import '../styles/home.css';

const Home: FunctionComponent = () => {
    return(
        <div className="home">
            <div className="homeItem">
                <h1>
                    Marc Lin
                </h1>   
                <img src="../images/logo.png" alt="" className="" />
            </div>
        </div>
    )
}

export default Home;