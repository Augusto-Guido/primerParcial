import { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div className="container mt-5 mb-5 text-white" style={{ minHeight: '60vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 bg-card-custom p-4 p-md-5 rounded-4 border border-secondary shadow">
          <h2 className="fw-bold mb-2 text-center">Soporte Técnico</h2>
          <p className="text-secondary text-center mb-4">¿Problemas con tu periférico? Escríbenos.</p>
          
          {enviado && <div className="alert alert-success bg-dark border-accent text-accent fw-bold text-center">¡Mensaje enviado con éxito!</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-secondary fw-bold">Nombre Completo</label>
              <input type="text" className="form-control bg-dark text-white border-secondary" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label text-secondary fw-bold">Email</label>
              <input type="email" className="form-control bg-dark text-white border-secondary" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="form-label text-secondary fw-bold">Mensaje</label>
              <textarea className="form-control bg-dark text-white border-secondary" name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-accent btn-lg w-100 fw-bold shadow">ENVIAR CONSULTA</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;