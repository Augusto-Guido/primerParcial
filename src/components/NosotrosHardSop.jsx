import React from 'react'
import { Link } from 'react-router-dom';

function MasCosas() {
  return (
    <div className="my-5 p-5 bg-dark-custom border border-secondary rounded-4 text-center shadow-lg">
          <h2 className="fw-bold mb-3">¿Listo para armar o mejorar tu PC?</h2>
          <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Explora nuestra tienda de hardware o ponte en contacto con nuestros técnicos si necesitas asesoramiento personalizado.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/productos" className="btn btn-danger btn-lg px-4">
              Ver Hardware
            </Link>
            <Link to="/contacto" className="btn btn-outline-light btn-lg px-4">
              Contactar Soporte
            </Link>
          </div>
    </div>
  )
}

export default MasCosas;