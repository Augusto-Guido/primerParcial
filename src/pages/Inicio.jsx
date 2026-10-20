import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ProductoCard from "../components/ProductoCard";
import Ubicacion from '../components/Ubicacion';

function Inicio({ productos = [], agregarAlCarrito }) {
  const productosDestacados = productos.slice(7, 10);

  const productosConStock = productos.filter(p => p.stock > 0);

  const productosOferta = productosConStock.slice(0, 3).map((prod, index) => {
    const descuentos = [10, 5, 15]; // 10% OFF, 5% OFF y 15% OFF
    return {
      ...prod,
      descuento: descuentos[index] || 10
    };
  });

  return (
    <div className="container mt-5 text-center" style={{ minHeight: '70vh' }}>
      <h1 className="display-3 fw-bold text-white mb-4 mt-5">
        LLEVA TU SETUP AL <span className="text-accent">SIGUIENTE NIVEL</span>
      </h1>
      <p className="lead text-secondary mb-5">
        Los mejores periféricos para dominar cada partida.
      </p>

      <div className="mb-5">
        <Carousel />
      </div>

      {/* SECCIÓN DE OFERTAS RELÁMPAGO (Solo productos con stock) */}
      {productosOferta.length > 0 && (
        <section className="my-5 text-start bg-card-custom p-4 p-md-5 rounded-4 border border-secondary shadow">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 pb-2 border-bottom border-secondary gap-2">
            <div>
              <h2 className="text-white fw-bold m-0 uppercase">
                🔥 OFERTAS <span className="text-accent">RELÁMPAGO</span>
              </h2>
              <p className="text-secondary small mb-0">
                Descuentos exclusivos por tiempo limitado en periféricos seleccionados.
              </p>
            </div>
            <span className="badge bg-danger text-uppercase px-3 py-2 fs-6">
              ¡HASTA 15% OFF!
            </span>
          </div>

          <div className="row g-4">
            {productosOferta.map((producto) => (
              <div key={producto.id} className="col-12 col-md-4">
                <ProductoCard
                  producto={producto}
                  agregarAlCarrito={agregarAlCarrito}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BANNER PROMOCIONAL */}
      <div className="row justify-content-center my-5">
        <div className="col-md-10">
          <div className="bg-card-custom p-5 rounded-4 border border-secondary shadow text-center">
            <h3 className="text-white mb-3">¿Buscas actualizar todo tu equipamiento?</h3>
            <p className="text-secondary mb-4 fs-5">
              Encuentra teclados, mouses, monitores y más con la garantía oficial de VIPER.
            </p>
            <Link to="/productos" className="btn btn-accent btn-lg fw-bold px-5 py-3 text-uppercase shadow">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </div>

      {/* SECCIÓN DESTACADOS */}
      {productosDestacados.length > 0 && (
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
      )}

      {/* SECCIÓN UBICACIÓN */}
      <Ubicacion />
    </div>
  );
}

export default Inicio;