import { useState } from "react";
import { productos } from "../data/productos.js";
import ProductoCard from "../components/ProductoCard";

function Productos({ agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const categorias = ["Todas", ...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoriaSeleccionada === "Todas" ||
      producto.categoria === categoriaSeleccionada;
    return coincideNombre && coincideCategoria;
  });

  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold mb-4 border-bottom border-secondary pb-3">
        Catálogo de Hardware
      </h2>

      <div className="row g-3 mb-4 align-items-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control border-secondary"
            placeholder="Buscar periférico por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-6 d-flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`btn btn-sm ${categoriaSeleccionada === cat ? "btn-accent fw-bold" : "btn-outline-secondary"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="text-center py-5 text-secondary">
          <h4>No se encontraron productos que coincidan con la búsqueda.</h4>
        </div>
      ) : (
        <div className="row g-4">
          {productosFiltrados.map((producto) => (
            <div className="col-12 col-md-6 col-lg-3" key={producto.id}>
              <ProductoCard
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;
