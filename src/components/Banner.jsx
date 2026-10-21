import { Link } from "react-router-dom"; // 👈 ¡Faltaba esta importación!

function Banner() {
  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-10">
        <div className="bg-card-custom p-5 rounded-4 border border-secondary shadow text-center">
          <h3 className="mb-3">¿Buscas actualizar todo tu equipamiento?</h3>
          <p className="text-secondary mb-4 fs-5">
            Encuentra teclados, mouses, monitores y más con la garantía oficial
            de VIPER.
          </p>
          <Link
            to="/productos"
            className="btn btn-accent btn-lg fw-bold px-5 py-3 text-uppercase shadow"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
