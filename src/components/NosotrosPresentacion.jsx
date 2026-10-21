import React from 'react'
import { Link } from 'react-router-dom';

function NosotrosPresentacion() {
  return (
    <div className="row align-items-center mb-5 pb-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-danger text-uppercase tracking-wider mb-2 px-3 py-2">
              Sobre Viper
            </span>
            <h1 className="display-4 fw-bold mb-3">
              Potenciamos tu pasión por el{" "}
              <span className="text-accent">Hardware</span>
            </h1>
            <p className="lead text-secondary">
              Nacimos con una misión clara: ofrecer la mejor tecnología,
              asesoramiento transparente y componentes de alta gama para gamers,
              creadores de contenido y profesionales.
            </p>
            <Link to="/productos" className="btn btn-outline-light btn-lg mt-3">
              Explorar Catálogo 🚀
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <div className="p-3 bg-dark-custom border border-secondary rounded-4 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
                alt="Setup Hardware Viper"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
    </div>
  )
}

export default NosotrosPresentacion;