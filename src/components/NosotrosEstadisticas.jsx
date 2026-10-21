import React from 'react'
import { estadisticas } from '../data/nosotros';

function NosotrosEstadisticas() {
  return (
    <div className="row g-4 my-5 text-center">
          {estadisticas.map((stat) => (
            <div key={stat.id} className="col-6 col-md-3 d-flex">
              <div className="p-3 p-xl-4 bg-dark-custom border border-secondary rounded-4 w-100 h-100 d-flex flex-column justify-content-center text-break">
                <h3 
                  className="fw-bold text-accent mb-1" 
                  style={{ fontSize: "clamp(1.5rem, 2vw, 2.5rem)" }}
                >
                  {stat.number}
                </h3>
                <p className="text-secondary small mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
    </div>
  )
}

export default NosotrosEstadisticas;