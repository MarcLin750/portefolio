import React, { FunctionComponent } from "react";
import '../styles/footer.css';
import Linkedin from "../svg/linkedin";
import GitHub from "../svg/github";

const Footer: FunctionComponent = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <h5 className="col-8">
                        &copy;Marc Lin
                    </h5>
                    <div className="col-2">
                        <a className="me-2" href="https://www.linkedin.com/in/marc-lin-80425a25a/" target="_blank" rel="noopener noreferrer"><strong><Linkedin /></strong></a>
                        <a href="https://github.com/MarcLin750?tab=repositories/" target="_blank" rel="noopener noreferrer"><strong><GitHub /></strong></a>
                    </div>
                    <h6 className="col-2">
                        PortFolio 2024
                    </h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;