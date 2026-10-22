import React from "react";
import { equipo } from "../data/nosotros";

function NosotrosCard() {
  return (
    <div className="my-5 py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-2">
          Conoce al <span className="text-accent">Equipo</span>
        </h2>
        <p className="text-secondary">
          Las personas detrás de la experiencia Viper
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {equipo.map((integrante) => (
          <div key={integrante.id} className="col-12 col-sm-6 col-lg-3">
            <div className="card bg-dark-custom text-light border-secondary text-center p-4 rounded-4 h-100 shadow-sm">
              <img
                src={integrante.foto}
                alt={integrante.nombre}
                className="rounded-circle mx-auto mb-3 border border-secondary"
                width="110"
                height="110"
                style={{ objectFit: "cover" }}
              />
              <h5 className="fw-bold mb-1 fs-5 text-accent">
                {integrante.nombre}
              </h5>
              <span className="badge bg-secondary mb-3 w-auto mx-auto px-2 py-1 small">
                {integrante.cargo}
              </span>
              <p className="text-secondary small mb-0">{integrante.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NosotrosCard;
