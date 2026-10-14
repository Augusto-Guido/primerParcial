import { productos } from '../data/productos.js'; 
import ProductoCard from '../components/ProductoCard';

function Productos({ agregarAlCarrito }) {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold text-white mb-4 border-bottom border-secondary pb-3">Catálogo de Hardware</h2>
      <div className="row g-4">
        {productos.map((producto) => (
          <div className="col-12 col-md-6 col-lg-3" key={producto.id}>
            <ProductoCard producto={producto} agregarAlCarrito={agregarAlCarrito} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;