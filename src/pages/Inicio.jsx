import Carousel from '../components/Carousel';
import Ubicacion from '../components/Ubicacion';
import Banner from '../components/Banner';
import ProductosDestacados from '../components/ProductosDestacados';
import ProductosOferta from '../components/ProductosOferta';

function Inicio({ productos = [], agregarAlCarrito }) {
  return (
    <div className="container mt-5 text-center" style={{ minHeight: '70vh' }}>
      <h1 className="display-3 fw-bold text-white mb-4 mt-5">
        LLEVA TU SETUP AL <span className="text-accent">SIGUIENTE NIVEL</span>
      </h1>
      <p className="lead text-secondary mb-5">
        Los mejores periféricos para dominar cada partida.
      </p>

      {/* SECCIÓN DE OFERTAS CAROUSEL*/}
      <Carousel />

      {/* SECCIÓN DE OFERTAS RELÁMPAGO (Solo productos con stock) */}
      <ProductosOferta
      productos ={productos}
      agregarAlCarrito={agregarAlCarrito} 
      />

      {/* BANNER PROMOCIONAL */}
      <Banner />

      {/* SECCIÓN DESTACADOS */}
      <ProductosDestacados
      productos ={productos}
      agregarAlCarrito={agregarAlCarrito} 
      />

      {/* SECCIÓN UBICACIÓN */}
      <Ubicacion />
    </div>
  );
}

export default Inicio;