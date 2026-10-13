import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';

function App() {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar al carrito
  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => 
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar carritoCount={carrito.reduce((acc, item) => acc + item.cantidad, 0)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;