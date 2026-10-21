# VIPER - TP Construcción de Interfaces de Usuario

## 📝 Descripción del Proyecto

Este proyecto es una plataforma de comercio electrónico desarrollada en **React** y compilada con **Vite**, diseñada específicamente para la materia *Construcción de Interfaces de Usuario* de la **Universidad Nacional de Hurlingham (UNAHUR)**.

**VIPER** es una tienda online especializada en la venta de productos de computación, periféricos y tecnología de alta gama. La aplicación simula la experiencia completa de compra, ofreciendo una interfaz moderna, fluida y totalmente **responsiva** (adaptable a celulares, tabletas y computadoras) utilizando **Bootstrap**.

---

## 🚀 Funcionalidades Principales

* **Página de Inicio:** Presentación estética de la marca con carrusel de equipamiento destacado, sección de **Ofertas Relámpago** con productos con descuento, franja de beneficios de compra y mapa con la ubicación física del local.
* **Catálogo Dinámico:** Renderizado de periféricos y hardware a partir de datos estructurados, con búsqueda interactiva por nombre, filtrado instantáneo por categorías y control estricto de stock (*bloqueo de botones y etiquetas visuales de "Sin Stock"*).
* **Vista de Detalle (`/producto/:id`):** Rutas dinámicas para explorar la especificación técnica completa, disponibilidad de unidades y características de cada producto.
* **Carrito de Compras Interactivo:** Gestión completa en tiempo real con selector de cantidad (+/-), opción de eliminación, cálculo automatizado de subtotales/totales y **persistencia automática en `localStorage`**.
* **Formulario de Checkout Controlado:** Proceso de compra estructurado que solicita y valida los datos de envío y contacto del comprador antes de confirmar el pedido.
* **Centro de Soporte Técnico:** Formulario independiente enfocado en consultas y garantías, con validaciones en tiempo real para campos obligatorios y formato de correo.
* **Sección Sobre Nosotros:** Presentación institucional con estadísticas, valores fundamentales de la empresa y perfiles del equipo de desarrollo.
* **Navegación & UX Optimizado:** Implementación de React Router DOM con reseteo de posición de scroll en cada cambio de ruta (`ScrollTop`) y botón flotante para regresar al inicio de página (`BtnScrollTop`).

---

## 🛠️ Tecnologías Utilizadas

### Tecnologías Principales
* **React:** Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.
* **Vite:** Entorno de desarrollo rápido y empaquetador para el frontend.
* **React Router DOM:** Gestión de enrutamiento dinámico para Single Page Application (SPA).
* **Bootstrap 5 & React-Bootstrap:** Framework CSS para el maquetado adaptativo, grillas y componentes estéticos.
* **JavaScript (ES6+) / HTML5 / CSS3:** Lenguajes fundamentales con diseño personalizado en tema oscuro (*Dark Theme*).

### Herramientas de Desarrollo
* **Git & GitHub:** Control de versiones y trabajo colaborativo en equipo.
* **Visual Studio Code:** Entorno de desarrollo integrado (IDE).

---

## 📦 Instrucciones de Instalación y Ejecución

Para clonar y ejecutar este proyecto de forma local en tu computadora, asegúrate de contar previamente con **Node.js** y **Git** instalados. Luego, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Augusto-Guido/primerParcial.git
   ```

2. **Ingresar a la carpeta del proyecto:**
   ```bash
   cd primerParcial
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   Ingresa a la dirección local indicada en la terminal (habitualmente `http://localhost:5173`).

---

## 👥 Integrantes del Grupo

* **Imanol Janse** — *Licenciatura en Informática (UNAHUR)*
* **Facundo Ferrero** — *Licenciatura en Informática (UNAHUR)*
* **Augusto Guido y Spano** — *Licenciatura en Informática (UNAHUR)*
* **Enzo Salinas** — *Licenciatura en Informática (UNAHUR)*

---

## 🔗 Link al Deploy

* **Sitio Web:** *https://parcial-ciu.vercel.app*