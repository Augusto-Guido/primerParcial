import React from 'react'
import { valores } from '../data/nosotros';

function NosotrosPorQue() {
  return (
    <div className="my-5 py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-2">
              ¿Por qué elegir <span className="text-accent">Viper</span>?
            </h2>
            <p className="text-secondary">
              Lo que nos diferencia en el mercado de componentes
            </p>
          </div>

          <div className="row g-4">
            {valores.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card bg-dark-custom border-secondary h-100 p-4 rounded-4 shadow-sm text-break">
                  <div className="card-body p-0 d-flex flex-column">
                    <h4 className="fw-bold mb-2" 
                    style={{ fontSize: "clamp(2.5rem, 2vw, 1.5rem)" }}>
                      {item.title}</h4>
                    <p className="text-secondary mb-0 mt-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default NosotrosPorQue;