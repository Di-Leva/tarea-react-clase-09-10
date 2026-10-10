import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrimerComponente from "./PrimerComponente.jsx"
import Saludo from "./Saludo.jsx"
import Contador from "./Contador.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente />
    {/* <App /> */}
    <Saludo nombre="joaquin"/>
    <Contador/>
  </StrictMode>,
)
