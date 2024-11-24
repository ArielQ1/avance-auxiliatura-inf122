import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'
import imagen1 from './assets/lapaz.jpg'
import imagenCocha from './assets/cocha.jpeg'
import santa from './assets/santacruz.jpeg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card titulo={"LA PAZ"} imagen={imagen1} parrafo={"La Paz, oficialmente Nuestra Señora de La Paz,6​ (antiguamente, La Paz de Ayacucho),7​ es la sede de gobierno de Bolivia. Es el centro político, financiero, social, académico y cultural más importante del país, además de ser la ciudad con mayor nivel de desarrollo sostenible en Bolivia."} />
    <Card titulo={"COCHABAMBA"} imagen={imagenCocha} parrafo={"Cochabamba es una ciudad del centro de Bolivia. En un cerro en el este, un teleférico asciende a la enorme estatua del Cristo de la Concordia con vista al área circundante. "}  />
    <Card titulo={"SANTA CRUZ"} imagen={santa} parrafo={"Santa Cruz de la Sierra es el centro comercial de Bolivia y la ciudad capital del departamento de Santa Cruz. Se ubica sobre el río Piraí, en las zonas bajas tropicales al este de los Andes."} />
  </StrictMode>,
)
