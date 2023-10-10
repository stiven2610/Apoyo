import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <h1 className="navbar-brand" href="#">
        Bienestar
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/adjudicados" className="nav-link">
              Beneficiarios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/beneficio" className="nav-link">
              Creación de Beneficio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tallermensual" className="nav-link">
              Creación de Taller
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filtros aprendiz
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/tablalectiva" className="dropdown-item">
                  A punto de cumplir etapa lectiva
                </Link>
              </li>
              <li>
                <Link to="/culminaformacion" className="dropdown-item">
                  A punto de culminar formación
                </Link>
              </li>
              <li>
                <Link to="/asistencia" className="dropdown-item">
                  Asistencia taller
                </Link>
              </li>
              <li>
                <Link to="/formatoseguimiento" className="dropdown-item">
                 Novedades Formato de seguimiento
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Usuario
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/datosusuario" className="dropdown-item">
                  Gestionar datos
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Salir
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
