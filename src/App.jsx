import { useState } from 'react'
import './App.css'


import NavBar from './components/NavBar';
import ImageCarousel from './components/ImageCarousel';
import GridHoverEffect from './components/GridHoverEffect';
import ChatWidget from './components/ChatWidget';
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
          </div>
          <div className="grid box-2">
            CONSUMIBLES
          </div>
          <div className="grid box-3">

            <div>
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
            
          </div>
          <div className="grid">
            GRID 2
          </div>
          <div className="grid">
            GRID 3
          </div>
        </div>
      </div>
      <div className="footer-container">
        <span>
          CR Group México © 2025 • Privacy Policy
        </span>
        <QuoteRequestForm />
      </div>
      <ChatWidget />
    </>
  )
}

export default App
