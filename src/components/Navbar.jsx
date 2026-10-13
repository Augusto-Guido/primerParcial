import { Link } from 'react-router-dom';
function Navbar({ carritoCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Nombre</Link>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Carrito">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contacto">Contacto</Link>
            </li>
          </ul>
        <Link className="text-decoration-none" to = "Carrito">
            <span className="navbar-text text-white">
                🛒 Carrito: {carritoCount}
            </span>
        </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;