import { Link } from "react-router-dom";
import React from "react"; // Asegúrate de importar React si aún no lo has hecho

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#4ae96f" }}>
      <div className="container"> {/* Agregamos un contenedor para alinear el contenido */}
        <h1 className="navbar-brand text-center w-100">APOYO DE SOSTENIMIENTO</h1>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <div className="col-12 col-md-3"> {/* Colocamos los enlaces en columnas de igual ancho */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
            </div>
            <div className="col-12 col-md-3">
              <li className="nav-item">
                <Link to="/formularioregistro" className="nav-link">
                  Asistencia
                </Link>
              </li>
            </div>
            <div className="col-12 col-md-3">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Aplicación
                </Link>
              </li>
            </div>
            <div className="col-12 col-md-3">
              <li className="nav-item">
                <a
                  href="https://oferta.senasofiaplus.edu.co/sofia-oferta/inscripcion-apoyo-sostenimiento.html"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Realizar inscripción
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
