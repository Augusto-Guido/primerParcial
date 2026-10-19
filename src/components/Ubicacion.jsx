function Ubicacion() {
  return (
    <div className="container my-5 text-white">
      <div className="text-center mb-4">
        <h2 className="fw-bold uppercase">
          VISITA NUESTRO <span className="text-accent">PUNTO DE RETIRO</span>
        </h2>
        <p className="text-secondary">
          Pasa a conocer nuestro local y ver los equipos en persona.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="bg-card-custom p-3 rounded-4 border border-secondary shadow">
            {/* Contenedor del mapa, dejo como modelo de presentacion el de unahur */}
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden border border-secondary">
              <iframe
                title="Ubicación VIPER"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4692801040624!2d-58.638612624259224!3d-34.617579472949345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses!2sar!4v1792449655039!5m2!1ses!2sar"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-3 text-center text-secondary small">
              📍 Tte. Manuel Origone 151, B1688 Villa Tesei, Provincia de Buenos Aires — ⏰ Lunes a Sábados de 10:00 a 19:00 hs.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubicacion;