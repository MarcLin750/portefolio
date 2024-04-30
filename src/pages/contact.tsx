import React, { FunctionComponent } from "react";
import '../styles/contact.css';

const Contact: FunctionComponent = () => {
    return (
        <div className="contact">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title m-2">Formulaire de contact</h2>
                    <hr />
                    <form>
                        <div className="mb-3">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nom" aria-label="Nom" />
                                <label className="input-group-text"> </label>
                                <input type="text" className="form-control" placeholder="Prénom" aria-label="Prénom" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="message" rows={5} placeholder="Entrez votre message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;