import { Link } from 'react-router-dom';
import ProductoCard from './ProductoCard';

function ProductosDestacados({ productos = [], agregarAlCarrito }) {
  const productosConStock = productos.filter(p => p.stock > 0);

  const productosDestacados = productosConStock.slice(3, 6);

  if (productosDestacados.length === 0) {
    return null;
  }

  return (
    <section className="my-5 text-start">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white fw-bold m-0 uppercase">
          DESTACADOS <span className="text-accent">VIPER</span>
        </h2>
        <Link to="/productos" className="btn btn-outline-light btn-sm fw-bold">
          Ver todos →
        </Link>
      </div>

      <div className="row g-4">
        {productosDestacados.map((producto) => (
          <div key={producto.id} className="col-12 col-md-4">
            <ProductoCard
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosDestacados;