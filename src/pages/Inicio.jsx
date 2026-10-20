import Carousel from '../components/Carousel';
import Ubicacion from '../components/Ubicacion';
import ProductosDestacados from '../components/ProductosDestacados';
import ProductosOferta from '../components/ProductosOferta';
import Beneficios from '../components/Beneficios';
import Banner from '../components/Banner';

function Inicio({ productos = [], agregarAlCarrito }) {
  return (
    <div className="container mt-5 text-center" style={{ minHeight: '70vh' }}>
      <h1 className="display-3 fw-bold text-white mb-4 mt-5">
        LLEVA TU SETUP AL <span className="text-accent">SIGUIENTE NIVEL</span>
      </h1>
      <p className="lead text-secondary mb-5">
        Los mejores periféricos para dominar cada partida.
      </p>

      {/* CARRUSEL DE IMÁGENES */}
      <Carousel />

      {/* FRANJA DE BENEFICIOS */}
      <Beneficios />

      {/* SECCIÓN DE OFERTAS RELÁMPAGO */}
      <ProductosOferta
        productos={productos}
        agregarAlCarrito={agregarAlCarrito} 
      />

      {/* BANNER PROMOCIONAL */}
      <Banner />

      {/* SECCIÓN DESTACADOS */}
      <ProductosDestacados
        productos={productos}
        agregarAlCarrito={agregarAlCarrito} 
      />

      {/* UBICACIÓN */}
      <Ubicacion />
    </div>
  );
}

export default Inicio;