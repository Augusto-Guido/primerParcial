import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import SobreNosotros from './pages/SobreNosotros';
import { productos } from './data/productos';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [alerta, setAlerta] = useState(null); // Estado para el cartel flotante

  // Función para mostrar la alerta y ocultarla sola después de 3 segundos
  const mostrarAlerta = (mensaje) => {
    setAlerta(mensaje);
    setTimeout(() => {
      setAlerta(null);
    }, 3000);
  };

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      const cantidadActualEnCarrito = existe ? existe.cantidad : 0;
      const nuevaCantidadTotal = cantidadActualEnCarrito + cantidad;

      if (nuevaCantidadTotal > producto.stock) {
        mostrarAlerta(`⚠️ No hay suficiente stock disponible. Stock máximo: ${producto.stock}`);
        return prev;
      }

      mostrarAlerta(`✅ ¡${producto.nombre} agregado al carrito!`);

      if (existe) {
        return prev.map(item => 
          item.id === producto.id ? { ...item, cantidad: nuevaCantidadTotal } : item
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 position-relative">
        
        {/* Cartel flotante en el centro de la pantalla */}
        {alerta && (
          <div 
            className="position-fixed top-50 start-50 translate-middle p-4 rounded-4 shadow-lg text-white fw-bold text-center fs-5 border border-accent bg-dark-custom z-3 animate-fade"
            style={{ minWidth: '320px', backgroundColor: '#1e1e1e', boxShadow: '0 0 20px rgba(255, 70, 85, 0.5)' }}
          >
            {alerta}
          </div>
        )}

        <Navbar carritoCount={carrito.reduce((acc, item) => acc + item.cantidad, 0)} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/sobreNosotros" element={<SobreNosotros />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;