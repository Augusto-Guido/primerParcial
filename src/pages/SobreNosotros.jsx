import React from 'react'
import { Link } from 'react-router-dom';
import { estadisticas } from '../data/nosotros';
import { valores } from '../data/nosotros';
import { equipo } from '../data/nosotros';
import MasCosas from '../components/NosotrosHardSop';
import NosotrosCard from '../components/NosotrosCard';


function SobreNosotros() {
  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <div className="container">

        <div className="row align-items-center mb-5 pb-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-danger text-uppercase tracking-wider mb-2 px-3 py-2">
              Sobre Viper
            </span>
            <h1 className="display-4 fw-bold mb-3">
              Potenciamos tu pasión por el <span className="text-accent">Hardware</span>
            </h1>
            <p className="lead text-secondary">
              Nacimos con una misión clara: ofrecer la mejor tecnología, asesoramiento transparente y componentes de alta gama para gamers, creadores de contenido y profesionales.
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

        <div className="row g-4 my-5 text-center">
          {estadisticas.map((stat) => (
            <div key={stat.id} className="col-6 col-md-3">
              <div className="p-4 bg-dark-custom border border-secondary rounded-4">
                <h2 className="display-5 fw-bold text-accent mb-1">{stat.number}</h2>
                <p className="text-secondary small mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-5 py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-2">¿Por qué elegir <span className="text-accent">Viper</span>?</h2>
            <p className="text-secondary">Lo que nos diferencia en el mercado de componentes</p>
          </div>

          <div className="row g-4">
            {valores.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card bg-dark-custom text-light border-secondary h-100 p-4 rounded-4 shadow-sm">
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h4 className="fw-bold mb-2">{item.title}</h4>
                  <p className="text-secondary mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <NosotrosCard />

        <MasCosas />

      </div>
    </div>
  );
}


export default SobreNosotros