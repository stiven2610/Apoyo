import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer  className=" text-dark py-5" style={{ backgroundColor: "#4ae96f" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Inicio</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Inicio</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contacto</h4>
            <p>Dirección: Carrera 27 No. 15-07</p>
            <p>Teléfono: 3166411988</p>
            <p>Email: bienaprecset@sena.edu.co</p>
          </div>
          <div className="col-md-4">
            <h4>Síguenos</h4>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
