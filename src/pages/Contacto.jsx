import { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "Soporte Técnico",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El Nombre completo es obligatorio";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El Email es obligatorio";
    } else if (!regexEmail.test(formData.email)) {
      newErrors.email = "El mail debe ser válido (ej: nombre@correo.com)";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Es obligatorio completar el mensaje";
    } else if (formData.mensaje.trim().length < 15) {
      newErrors.mensaje = "El mensaje debe contener al menos 15 caracteres";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setEnviado(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "Soporte Técnico",
        mensaje: "",
      });
      setTimeout(() => setEnviado(false), 5000);
    } else {
      setEnviado(false);
    }
  };

  return (
    <div className="container mt-5 mb-5 text-white" style={{ minHeight: "60vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 bg-card-custom p-4 p-md-5 rounded-4 border border-secondary shadow">
          <h2 className="fw-bold mb-2 text-center">Centro de Soporte VIPER</h2>
          <p className="text-secondary text-center mb-4">
            ¿Tienes alguna consulta técnica sobre tu producto o garantía? Escríbenos.
          </p>

          {enviado && (
            <div className="alert alert-success bg-dark border-accent text-accent fw-bold text-center mb-4 py-3">
              ✅ ¡Consulta enviada con éxito! Un técnico te responderá a la brevedad.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label text-secondary fw-bold">Nombre Completo *</label>
              <input
                type="text"
                className={`form-control bg-dark text-white border-secondary ${errors.nombre ? "is-invalid" : ""}`}
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <div className="invalid-feedback d-block">{errors.nombre}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary fw-bold">Email de Contacto *</label>
              <input
                type="email"
                className={`form-control bg-dark text-white border-secondary ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary fw-bold">Telefono *</label>
              <input
                type="tel"
                className={`form-control bg-dark text-white border-secondary ${errors.telefono ? "is-invalid" : ""}`}
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej: 1123456789"
              />
              {errors.telefono && <div className="invalid-feedback d-block">{errors.telefono}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary fw-bold">Motivo de Consulta</label>
              <select
                className="form-select bg-dark text-white border-secondary"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
              >
                <option value="Soporte Técnico">Soporte Técnico / Configuración</option>
                <option value="Garantía">Garantía o Cambio</option>
                <option value="Asesoramiento">Asesoramiento de Armado</option>
                <option value="Otro">Otra Consulta</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label text-secondary fw-bold">Mensaje *</label>
              <textarea
                className={`form-control bg-dark text-white border-secondary ${errors.mensaje ? "is-invalid" : ""}`}
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Describe en detalle tu consulta o inconveniente..."
              ></textarea>
              {errors.mensaje && <div className="invalid-feedback d-block">{errors.mensaje}</div>}
            </div>

            <button type="submit" className="btn btn-accent btn-lg w-100 fw-bold shadow">
              ENVIAR CONSULTA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;