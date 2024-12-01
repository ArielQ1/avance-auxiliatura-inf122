import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Carrusel from './components/Carrusel'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
