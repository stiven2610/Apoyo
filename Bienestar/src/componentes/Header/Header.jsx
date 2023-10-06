import { Link } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary ">
      <a className="navbar-brand" href="#">
        Bienestar
      </a>
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
            <Link to="/adjudicados">
              <a className="nav-link" href="#">
                Beneficio
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Gestionar Formato
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Gestionar aprendiz
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/tablalectiva">
                  <a className="dropdown-item" href="#">
                    A punto de cumplir etapa lectiva
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/tablaproductiva">
                  <a className="dropdown-item" href="#">
                    A punto de cumplir etapa productiva
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/asistenciataller">
                  <a className="dropdown-item" href="#">
                    Asistencia taller
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/formatoseguimiento">
                  <a className="dropdown-item" href="#">
                    Formato de seguimiento
                  </a>
                </Link>
              </li>
              <li>
                <Link>
                  <a className="dropdown-item" href="#">
                    Aprendices por formato
                  </a>
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
                <Link to='/datosusuario'>
                  <a className="dropdown-item" href="#">
                    Gestionar datos
                  </a>
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#">
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
