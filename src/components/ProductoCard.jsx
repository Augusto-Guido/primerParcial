import { Link, useNavigate } from "react-router-dom";

function ProductoCard({ producto, agregarAlCarrito }) {
  const navigate = useNavigate();

  if (!producto) return null;

  return (
    <div
      className="card h-100 bg-card-custom text-white border-secondary card-hover"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/producto/${producto.id}`)}
    >
      <div
        style={{ height: "200px", overflow: "hidden" }}
        className="p-3 position-relative"
      >
        {producto.stock === 0 && (
          <span className="position-absolute top-0 start-0 m-3 badge bg-danger">
            Sin stock
          </span>
        )}
        <img
          src={producto.imagen}
          className="card-img-top rounded h-100 w-100"
          alt={producto.nombre}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <span className="badge bg-secondary mb-2 align-self-start">
          {producto.categoria}
        </span>
        <h5 className="card-title fw-bold">{producto.nombre}</h5>
        <p className="card-text text-secondary small mb-4">
          {producto.descripcion.substring(0, 50)}...
        </p>

        <div className="mt-auto" onClick={(e) => e.stopPropagation()}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-5 fw-bold text-accent">
              ${producto.precio.toLocaleString("es-AR")}
            </span>
            <Link
              to={`/producto/${producto.id}`}
              className="btn btn-sm btn-outline-light"
            >
              Ver
            </Link>
          </div>

          <button
            onClick={() => agregarAlCarrito(producto)}
            className={`btn w-100 fw-bold py-2 text-uppercase ${producto.stock === 0 ? "btn-secondary disabled" : "btn-accent"}`}
            disabled={producto.stock === 0}
            style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}
          >
            {producto.stock === 0 ? "Sin Stock" : "🛒 Agregar al Carrito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoCard;
