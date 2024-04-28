import React, { FunctionComponent, useState, useEffect } from "react";
import '../styles/cv.css';

const CV: FunctionComponent = () => {

  const [loading, setLoading] = useState(true);
  const CvPdf = require('../doc/CV_Marc_Lin.pdf');

  useEffect(() => {
    // Simulation d'un chargement asynchrone du CV
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Mettez la durée de chargement appropriée ici
  }, []);

  const printDocument = () => {
    const pdfWindow = window.open(CvPdf);
    if (pdfWindow) {
      // Attendre que le PDF soit chargé dans la nouvelle fenêtre avant d'imprimer
      pdfWindow.onload = function () {
        // Vérifier si la fenêtre n'est pas bloquée et que le contenu est chargé
        try {
          pdfWindow.print();
        } catch (e) {
          console.error("La fenêtre d'impression n'a pas pu être ouverte.");
        }
      };
    } else {
      alert("Impossible d'ouvrir le PDF dans une nouvelle fenêtre. Vérifiez si les pop-ups sont autorisés.");
    }
  };

  return (
    <div className="cv">
      {loading ? (
        <div  className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                </div>
                <p className="mt-3">Le CV est en cours chargement...</p>
            </div>
        </div>
      ) : (
        <div className="container">
          <div className="buttons-container d-flex justify-content-center">
            <a className="btn btn-primary btn-small m-2" href={CvPdf} download="MarcLin_CV.pdf">
              Télécharger mon CV ↓
            </a>
            <button onClick={printDocument} className="btn btn-secondary btn-small m-2">
              Imprimer le CV ↑
            </button>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '141.4286%',
                overflow: 'hidden',
                borderRadius: '8px',
                willChange: 'transform',
              }}>
                <iframe
                  title="Embedded CV"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    right:0,
                    bottom:0
                  }}
                  src="https://www.canva.com/design/DAF6zpytwG8/hGtHpfkjIED4q7qi_UT9Zw/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CV;
