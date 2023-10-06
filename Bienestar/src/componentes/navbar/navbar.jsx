import { Link } from "react-router-dom"; // Si estás utilizando React Router
import "./styles.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container ">
        <Link to="/" className="navbar-brand">
          APOYO DE SOSTENIMIENTO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link to="/formularioregistro" className="nav-link">
                Registrar asistencia aprendiz
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Aplicación
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
