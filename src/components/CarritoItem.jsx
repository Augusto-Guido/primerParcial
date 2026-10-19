function CarritoItem({ item, setCarrito }) {
  const eliminarItem = () => {
    setCarrito(prev => prev.filter(p => p.id !== item.id));
  };

  const disminuirCantidad = () => {
    setCarrito(prev => 
      prev
        .map(p => (p.id === item.id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter(p => p.cantidad > 0)
    );
  };

  const aumentarCantidad = () => {
    setCarrito(prev =>
      prev.map(p => {
        if (p.id === item.id && p.cantidad < p.stock) {
          return { ...p, cantidad: p.cantidad + 1 };
        }
        return p;
      })
    );
  };

  return (
    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between border-bottom border-secondary py-3 text-white gap-3">
      {/* Datos e Imagen del Producto */}
      <div className="d-flex align-items-center gap-3">
        <img 
          src={item.imagen} 
          alt={item.nombre} 
          style={{ width: '65px', height: '65px', objectFit: 'cover' }} 
          className="rounded border border-secondary"
        />
        <div>
          <h6 className="mb-1 fw-bold">{item.nombre}</h6>
          <small className="text-secondary d-block">
            Precio unitario: ${item.precio.toLocaleString('es-AR')}
          </small>
          <small className="text-muted">
            Disponibles: {item.stock} u.
          </small>
        </div>
      </div>

      {/* Controles de Cantidad y Subtotal */}
      <div className="d-flex align-items-center justify-content-between w-100 w-sm-auto gap-3 ms-auto">
        {/* Selector [-] UNIDADES [+] */}
        <div className="d-flex align-items-center bg-dark rounded border border-secondary px-2 py-1">
          <button 
            onClick={disminuirCantidad} 
            className="btn btn-sm btn-link text-white text-decoration-none fw-bold px-2" 
            title="Restar una unidad"
          >
            -
          </button>
          <span className="px-2 fw-bold text-accent fs-6">{item.cantidad}</span>
          <button 
            onClick={aumentarCantidad} 
            className="btn btn-sm btn-link text-white text-decoration-none fw-bold px-2" 
            disabled={item.cantidad >= item.stock}
            title="Sumar una unidad"
          >
            +
          </button>
        </div>

        {/* Subtotal del Producto */}
        <div className="text-end" style={{ minWidth: '90px' }}>
          <span className="fw-bold text-accent fs-6">
            ${(item.precio * item.cantidad).toLocaleString('es-AR')}
          </span>
        </div>

        {/* Botón Eliminar */}
        <button 
          onClick={eliminarItem} 
          className="btn btn-sm btn-outline-danger px-2 py-1 fw-bold"
          title="Eliminar producto"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default CarritoItem;