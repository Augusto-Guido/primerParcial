import ProductoCard from './ProductoCard';


function ProductosOferta({ productos = [], agregarAlCarrito }){
    const productosConStock = productos.filter(p => p.stock > 0);
    const productosOferta = productosConStock.slice(0, 3).map((prod, index) => {
    const descuentos = [10, 5, 15]; // 10% OFF, 5% OFF y 15% OFF
    return {
      ...prod,
      descuento: descuentos[index] || 10
    };
  });
    return(
        productosOferta.length > 0 && (
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
        )
    )
}

export default ProductosOferta;