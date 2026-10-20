function Beneficios() {
  return (
    <section className="my-5 py-4 bg-card-custom rounded-4 border border-secondary shadow">
      <div className="row g-4 text-center text-white">
        <div className="col-6 col-md-3">
          <div className="fs-2 text-accent mb-2">💳</div>
          <h6 className="fw-bold mb-1">Hasta 12 Cuotas</h6>
          <small className="text-secondary">Sin interés en productos seleccionados</small>
        </div>
        <div className="col-6 col-md-3">
          <div className="fs-2 text-accent mb-2">🚀</div>
          <h6 className="fw-bold mb-1">Envíos Rápidos</h6>
          <small className="text-secondary">Despacho en 24 hs a todo el país</small>
        </div>
        <div className="col-6 col-md-3">
          <div className="fs-2 text-accent mb-2">🛡️</div>
          <h6 className="fw-bold mb-1">Garantía VIPER</h6>
          <small className="text-secondary">100% oficial en todos los componentes</small>
        </div>
        <div className="col-6 col-md-3">
          <div className="fs-2 text-accent mb-2">📍</div>
          <h6 className="fw-bold mb-1">Retiro en Local</h6>
          <small className="text-secondary">Gratis en nuestra sucursal</small>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;