import Carousel from "../components/Carousel";
import Ubicacion from "../components/Ubicacion";
import ProductosDestacados from "../components/ProductosDestacados";
import ProductosOferta from "../components/ProductosOferta";
import Beneficios from "../components/Beneficios";
import Banner from "../components/Banner";

function Inicio({ productos = [], agregarAlCarrito }) {
  return (
    <div className="container mt-5 text-center" style={{ minHeight: "70vh" }}>
      

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
