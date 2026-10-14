import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/productos.js';

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="container mt-5 text-center text-white" style={{ minHeight: '60vh' }}>
        <h2 className="display-5 fw-bold">Producto no encontrado</h2>
        <Link to="/productos" className="btn btn-outline-light mt-4">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5 text-white" style={{ minHeight: '60vh' }}>
      <Link to="/productos" className="btn btn-outline-secondary mb-4">← Volver al catálogo</Link>
      
      <div className="row g-5 bg-card-custom p-4 rounded-4 border border-secondary shadow">
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-dark rounded position-relative">
          {producto.stock === 0 && (
            <span className="position-absolute top-0 start-0 m-3 badge bg-danger fs-5">Sin Stock</span>
          )}
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid rounded" style={{ maxHeight: '400px', objectFit: 'contain' }} />
        </div>
        
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <span className="badge bg-secondary mb-3 align-self-start fs-6">{producto.categoria}</span>
          <h1 className="fw-bold mb-3">{producto.nombre}</h1>
          <h2 className="text-accent fw-bold mb-4">${producto.precio.toLocaleString('es-AR')}</h2>
          <p className="text-secondary fs-5 mb-4">{producto.descripcion}</p>
          <p className="text-light mb-4"><strong>Disponibilidad:</strong> {producto.stock > 0 ? `${producto.stock} unidades disponibles` : 'No disponible actualmente'}</p>
          
          <ul className="list-group list-group-flush bg-transparent mb-5 border-top border-secondary pt-3">
            {producto.caracteristicas.map((carac, index) => (
              <li key={index} className="list-group-item bg-transparent text-white border-secondary px-0">
                ✔️ {carac}
              </li>
            ))}
          </ul>

          <button 
            onClick={() => agregarAlCarrito(producto)} 
            className={`btn btn-lg fw-bold text-uppercase shadow ${producto.stock === 0 ? 'btn-secondary disabled' : 'btn-accent'}`}
            disabled={producto.stock === 0}
          >
            {producto.stock === 0 ? 'Sin Stock' : 'Añadir al Carrito'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;