import { Link } from 'react-router-dom';

function ProductoCard({ producto, agregarAlCarrito }) {
  if (!producto) return null;

  return (
    <div className="card h-100 bg-card-custom text-white border-secondary card-hover">
      <div style={{ height: '200px', overflow: 'hidden' }} className="p-3 position-relative">
        {producto.stock === 0 && (
          <span className="position-absolute top-0 start-0 m-3 badge bg-danger">Sin stock</span>
        )}
        <img 
            src={producto.imagen} 
            className="card-img-top rounded h-100 w-100" 
            alt={producto.nombre} 
            style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <span className="badge bg-secondary mb-2 align-self-start">{producto.categoria}</span>
        <h5 className="card-title fw-bold">{producto.nombre}</h5>
        <p className="card-text text-secondary small mb-4">{producto.descripcion.substring(0, 50)}...</p>
        
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fs-5 fw-bold text-accent">${producto.precio.toLocaleString('es-AR')}</span>
          <div>
            <Link to={`/producto/${producto.id}`} className="btn btn-sm btn-outline-light me-2">
              Ver
            </Link>
            <button 
              onClick={() => agregarAlCarrito(producto)} 
              className={`btn btn-sm fw-bold ${producto.stock === 0 ? 'btn-secondary disabled' : 'btn-accent'}`}
              disabled={producto.stock === 0}
            >
              {producto.stock === 0 ? 'No disponible' : '+'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoCard;