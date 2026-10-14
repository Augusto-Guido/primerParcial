function CarritoItem({ item, setCarrito }) {
  const eliminarItem = () => {
    setCarrito(prev => prev.filter(p => p.id !== item.id));
  };

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom border-secondary py-3 text-white">
      <div className="d-flex align-items-center gap-3">
        <img src={item.imagen} alt={item.nombre} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded"/>
        <div>
          <h6 className="mb-0 fw-bold">{item.nombre}</h6>
          <small className="text-secondary">Cant: {item.cantidad}</small>
        </div>
      </div>
      <div className="d-flex align-items-center gap-4">
        <span className="fw-bold text-accent">${(item.precio * item.cantidad).toLocaleString('es-AR')}</span>
        <button onClick={eliminarItem} className="btn btn-sm btn-outline-danger px-2 fw-bold">X</button>
      </div>
    </div>
  );
}

export default CarritoItem;