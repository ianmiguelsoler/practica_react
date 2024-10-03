// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Contenedor from './componentes/contenedor/Contenedor.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Contenedor titulo="El Ejercicio 1 es este:" />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppPeliculas from './AppPeliculas.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPeliculas />
  </StrictMode>,
)
