import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Contenedor from './componentes/contenedor/Contenedor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenedor />
  </StrictMode>,
)
