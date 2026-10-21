import { Link, NavLink } from 'react-router-dom';
import logoViper from '../assets/logo.jpg';

function Navbar({ carritoCount }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom border-bottom border-secondary w-100 px-3 py-3 sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-4 text-accent tracking-widest text-uppercase" to="/">
                    <img src={logoViper} alt="Logo Viper" height="80" />
                </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-4 mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">Hardware</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Soporte</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobreNosotros">Contactanos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobreNosotros">Sobre Nosotros</NavLink>
            </li>
          </ul>
          <Link className="btn btn-outline-light d-flex align-items-center gap-2" to="/carrito">
            <span>🛒</span> Carrito 
            <span className="badge bg-accent text-white rounded-pill">{carritoCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;