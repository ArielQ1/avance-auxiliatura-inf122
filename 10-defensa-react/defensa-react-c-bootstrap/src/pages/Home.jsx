import Carrusel from "../components/Carrusel";
import Cardsito from "../components/Cardsito";


const Home = () => {
  return(
    <>
      <div className="contenedor-carrusel my-5">
        <Carrusel className="imagen-carrusel" />
        <Carrusel className="imagen-carrusel" />
      </div>
      <Cardsito />
    </>
  )
}

export default Home;