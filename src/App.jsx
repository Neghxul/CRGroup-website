import { useState } from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import NavBar from './components/NavBar';
import ImageCarousel from './components/ImageCarousel';
import GridHoverEffect from './components/GridHoverEffect';
import ChatWidget from './components/ChatWidget';
import ChatWidgetSecond from './components/ChatWidgetSecond';
import ChatBot from './components/ChatBot';
import QuoteRequestForm from './components/QuoteRequestForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />   

      <div className="body-container">
        <div className="container main-carousel-container">
          <ImageCarousel />
        </div>
        <GridHoverEffect />
        <div className="container  grid-container-2">
          <div className="grid box-1">
            REFACCIONES
            Aplicaciones industriales: Explica en qué sectores o equipos encajan tus productos.
          </div>
          <div className="grid box-2">
            CONSUMIBLES
            Socios comerciales: Destaca marcas internacionales con las que trabajas o importas refacciones.
          </div>
          <div className="grid box-3">

            <div>Ofertas especiales: Destaca descuentos, paquetes o refacciones en liquidación.
              <h1>Get the Latest News Delivered Daily.</h1>
              <h3>Give us your email and you will be daily updated with the latest events, in detail.</h3>
            </div>
            <div>
              <input type="email" /><input type="button" value="popo" />
            </div>
            
          </div>
        </div>
        <div className="container grid-container-3">
          <div className="grid">
          Descripción de servicios especializados: Por ejemplo, asesoramiento técnico, mantenimiento, o instalación de refacciones.
          </div>
          <div className="grid">
          Soporte postventa: Detalla cómo apoyas a los clientes después de su compra.
          </div>
          <div className="grid">
          Tendencias de la industria: Comparte información sobre nuevas tecnologías, materiales o equipos industriales.
          </div>
        </div>
      </div>
      <div className="footer-container">
        <span>
          CR Group México © 2025 • Privacy Policy
          Política de devoluciones: Explica el proceso en caso de cambios o devoluciones.
Garantías: Resalta las garantías de tus productos y cómo hacerlas efectivas.
Red de distribución
Muestra tus tiempos estimados de envío y zonas de cobertura.
Agrega información sobre tus almacenes o puntos de venta.
        </span>
      </div>
      {/*<ChatWidget />
      <ChatWidgetSecond />*/}
    </>
  )
}

export default App
