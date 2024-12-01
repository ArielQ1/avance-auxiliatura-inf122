import Carrusel from "../components/Carrusel";
import Card from "../components/Card";
import { imagenesCarrusel2, imagesCarrusel1 } from "../imagenes-carrusel";

const Home = () => {

    return (
        <>
            <div className="container">
                <Carrusel imagenes={imagesCarrusel1} />
                <Carrusel imagenes={imagenesCarrusel2}/>
            </div>
            <div className="container">
                <Card 
                    titulo={"Picana"}  
                    imagen={"https://cdn.bolivia.com/gastronomia/2018/02/23/picana-boliviana-3572.gif"}
                    descripcion={"La picana es una sopa tradicional de Bolivia, que se consume en Navidad y Año Nuevo. Se prepara con carne de res, cordero, cerdo, pollo, verduras y especias."}
                />
                <Card 
                    titulo={"Lechon"} 
                    imagen={"https://unareceta.com/wp-content/uploads/2017/10/lechon-al-horno-.jpg"}
                    descripcion={"El lechón al horno es un plato típico de Bolivia, que se prepara con carne de cerdo, especias y hierbas aromáticas. Se sirve con papas, arroz y ensalada."}
                />
                <Card 
                    titulo={"Chicharon"} 
                    imagen={"https://i.ytimg.com/vi/VRarMMdBSR8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANv3N7y6Yubzjvgm6qLUYt9Li-Mg"} 
                    descripcion={"El chicharrón es un plato típico de Bolivia, que se prepara con carne de cerdo frita. Se sirve con mote, papas, ensalada y ají. y demas condimentos"}    
                />
            </div>
            
        </>
        
    );
}
export default Home;