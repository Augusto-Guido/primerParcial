import { Link, NavLink } from "react-router-dom";
import logoViper from "../assets/logo.jpg";
import BotonTema from "./BotonTema";

function Navbar({ carritoCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-custom border-bottom border-secondary w-100 px-3 py-3 sticky-top">
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold fs-4 text-accent tracking-widest text-uppercase"
          to="/"
        >
          <img
            src={logoViper}
            alt="Logo Viper"
            height="80"
            className="border border-secondary rounded-3 shadow-sm"
          />
        </Link>

        <div className="d-flex align-items-center gap-3 d-lg-none">
          <BotonTema />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-4 mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Hardware
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Soporte
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobreNosotros">
                Sobre Nosotros
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <div className="d-none d-lg-block">
              <BotonTema />
            </div>

            <Link
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
              to="/carrito"
            >
              <span>🛒</span> Carrito
              <span className="badge bg-accent rounded-pill text-body">
                {carritoCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
