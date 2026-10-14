import { Link } from 'react-router-dom';
import CarritoItem from '../components/CarritoItem';

function Carrito({ carrito, setCarrito }) {
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  if (carrito.length === 0) {
    return (
      <div className="container mt-5 text-center text-white py-5 bg-card-custom rounded-4 border border-secondary" style={{ minHeight: '50vh' }}>
        <h2 className="fw-bold mb-4 display-6 mt-5">Tu carrito está vacío</h2>
        <p className="text-secondary fs-5 mb-5">El setup de tus sueños te está esperando.</p>
        <Link to="/productos" className="btn btn-accent btn-lg fw-bold px-5">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5 text-white" style={{ minHeight: '60vh' }}>
      <h2 className="fw-bold mb-4">Tu Orden</h2>
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
            <h4 className="fw-bold mb-4 border-bottom border-secondary pb-2">Resumen</h4>
            <div className="d-flex justify-content-between mb-3 text-secondary">
              <span>Subtotal</span><span>${total.toLocaleString('es-AR')}</span>
            </div>
            <div className="d-flex justify-content-between mt-4 pt-3 border-top border-secondary">
              <span className="fw-bold fs-5">Total</span>
              <span className="fw-bold fs-4 text-accent">${total.toLocaleString('es-AR')}</span>
            </div>
            <button className="btn btn-accent w-100 mt-4 py-3 fw-bold text-uppercase shadow">Comprar Ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;