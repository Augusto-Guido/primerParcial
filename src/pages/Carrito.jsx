import { useState } from 'react';
import { Link } from 'react-router-dom';
import CarritoItem from '../components/CarritoItem';

function Carrito({ carrito, setCarrito }) {
  const [paso, setPaso] = useState('carrito'); // 'carrito', 'checkout', 'confirmado'
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    metodoEntrega: 'envio',
    notas: ''
  });
  const [errors, setErrors] = useState({});

  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProcederCheckout = () => {
    if (carrito.length > 0) {
      setPaso('checkout');
    }
  };

  const handleConfirmarCompra = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El Nombre y Apellido es obligatorio";
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El Email es obligatorio";
    } else if (!regexEmail.test(formData.email)) {
      newErrors.email = "Email no válido";
    }

    if (!formData.telefono.trim()) newErrors.telefono = "El Teléfono es obligatorio";
    if (!formData.direccion.trim()) newErrors.direccion = "La Dirección o Localidad es obligatoria";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPaso('confirmado');
      setCarrito([]);
    }
  };

  return (
    <div className="container mt-5 mb-5 text-white" style={{ minHeight: '60vh' }}>
      
      {/*CONFIRMACIÓN EXITOSA */}
      {paso === 'confirmado' && (
        <div className="text-center py-5 bg-card-custom rounded-4 border border-secondary shadow col-md-8 mx-auto">
          <div className="display-1 mb-3">🎉</div>
          <h2 className="fw-bold mb-3 text-accent">¡Compra realizada con éxito!</h2>
          <p className="text-secondary fs-5 mb-2">
            Gracias por tu compra, <strong className="text-white">{formData.nombre}</strong>.
          </p>
          <p className="text-secondary mb-4">
            Enviamos el comprobante y los detalles del envío a <strong className="text-white">{formData.email}</strong>.
          </p>
          <Link to="/productos" className="btn btn-accent btn-lg fw-bold px-5">
            Volver a la Tienda
          </Link>
        </div>
      )}

      {/* CARRITO VACÍO */}
      {paso !== 'confirmado' && carrito.length === 0 && (
        <div className="text-center py-5 bg-card-custom rounded-4 border border-secondary shadow" style={{ minHeight: '50vh' }}>
          <h2 className="fw-bold mb-4 display-6 mt-5">Tu carrito está vacío</h2>
          <p className="text-secondary fs-5 mb-5">El setup de tus sueños te está esperando.</p>
          <Link to="/productos" className="btn btn-accent btn-lg fw-bold px-5">Ir a explorar productos</Link>
        </div>
      )}

      {/*REVISIÓN DE PRODUCTOS */}
      {paso === 'carrito' && carrito.length > 0 && (
        <div>
          <h2 className="fw-bold mb-4">Tu Orden ({totalUnidades} {totalUnidades === 1 ? 'producto' : 'productos'})</h2>
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="bg-card-custom p-4 rounded-4 border border-secondary shadow">
                {carrito.map(item => (
                  <CarritoItem key={item.id} item={item} setCarrito={setCarrito} />
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-card-custom p-4 rounded-4 border border-secondary shadow sticky-top" style={{ top: '100px' }}>
                <h4 className="fw-bold mb-4 border-bottom border-secondary pb-2">Resumen de Compra</h4>
                <div className="d-flex justify-content-between mb-2 text-secondary">
                  <span>Unidades totales:</span>
                  <span className="fw-bold text-white">{totalUnidades} u.</span>
                </div>
                <div className="d-flex justify-content-between mb-3 text-secondary">
                  <span>Subtotal:</span>
                  <span>${total.toLocaleString('es-AR')}</span>
                </div>
                <div className="d-flex justify-content-between mt-4 pt-3 border-top border-secondary">
                  <span className="fw-bold fs-5">Total</span>
                  <span className="fw-bold fs-4 text-accent">${total.toLocaleString('es-AR')}</span>
                </div>
                <button 
                  onClick={handleProcederCheckout} 
                  className="btn btn-accent w-100 mt-4 py-3 fw-bold text-uppercase shadow"
                >
                  Completar Datos de Envío →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*FORMULARIO DE COMPRA / CHECKOUT */}
      {paso === 'checkout' && carrito.length > 0 && (
        <div className="row justify-content-center">
          <div className="col-lg-8 bg-card-custom p-4 p-md-5 rounded-4 border border-secondary shadow">
            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-3">
              <h3 className="fw-bold m-0">Datos del Comprador</h3>
              <button onClick={() => setPaso('carrito')} className="btn btn-sm btn-outline-secondary">
                ← Volver al Carrito
              </button>
            </div>

            <form onSubmit={handleConfirmarCompra} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-secondary fw-bold">Nombre y Apellido *</label>
                  <input
                    type="text"
                    className={`form-control bg-dark text-white border-secondary ${errors.nombre ? 'is-invalid' : ''}`}
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label text-secondary fw-bold">Email *</label>
                  <input
                    type="email"
                    className={`form-control bg-dark text-white border-secondary ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label text-secondary fw-bold">Teléfono de Contacto *</label>
                  <input
                    type="tel"
                    className={`form-control bg-dark text-white border-secondary ${errors.telefono ? 'is-invalid' : ''}`}
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label text-secondary fw-bold">Dirección / Localidad *</label>
                  <input
                    type="text"
                    className={`form-control bg-dark text-white border-secondary ${errors.direccion ? 'is-invalid' : ''}`}
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                  />
                  {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label text-secondary fw-bold">Método de Entrega</label>
                  <select
                    className="form-select bg-dark text-white border-secondary"
                    name="metodoEntrega"
                    value={formData.metodoEntrega}
                    onChange={handleChange}
                  >
                    <option value="envio">Envío a Domicilio (Correo / Mensajería)</option>
                    <option value="retiro">Retiro en Sucursal VIPER</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label text-secondary fw-bold">Notas o aclaración para la entrega (Opcional)</label>
                  <textarea
                    className="form-control bg-dark text-white border-secondary"
                    name="notas"
                    rows="2"
                    value={formData.notas}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-secondary d-block small">Total a Pagar:</span>
                  <span className="fw-bold fs-4 text-accent">${total.toLocaleString('es-AR')}</span>
                </div>
                <button type="submit" className="btn btn-accent btn-lg fw-bold px-4">
                  Confirmar y Pagar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Carrito;