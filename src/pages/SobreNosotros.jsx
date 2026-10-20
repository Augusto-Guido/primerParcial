import { Link } from "react-router-dom";
import { estadisticas } from "../data/nosotros";
import { valores } from "../data/nosotros";
import { equipo } from "../data/nosotros";

function SobreNosotros() {
  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        <section className="row align-items-center mb-5 pb-4">
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
        </section>

        <section className="row g-4 my-5 text-center">
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
        </section>

        <section className="my-5 py-4">
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
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <h4 className="fw-bold mb-2">{item.title}</h4>
                    <p className="text-secondary mb-0 mt-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-5 py-4">
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
                <div className="card bg-dark-custom border-secondary text-center p-4 rounded-4 h-100 shadow-sm text-break">
                  <img
                    src={integrante.foto}
                    alt={integrante.nombre}
                    className="rounded-circle mx-auto mb-3 border border-secondary"
                    width="110"
                    height="110"
                    style={{ objectFit: "cover" }}
                  />
                  <h5 className="fw-bold mb-1 fs-5">{integrante.nombre}</h5>
                  <span className="badge bg-secondary mb-3 w-auto mx-auto px-2 py-1 small">
                    {integrante.cargo}
                  </span>
                  <p className="text-secondary small mb-0">{integrante.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-5 p-5 bg-dark-custom border border-secondary rounded-4 text-center shadow-lg">
          <h2 className="fw-bold mb-3">¿Listo para armar o mejorar tu PC?</h2>
          <p
            className="text-secondary mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Explora nuestra tienda de hardware o ponte en contacto con nuestros
            técnicos si necesitas asesoramiento personalizado.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/productos" className="btn btn-accent btn-lg px-4">
              Ver Hardware
            </Link>
            <Link to="/contacto" className="btn btn-outline-light btn-lg px-4">
              Contactar Soporte
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SobreNosotros;
