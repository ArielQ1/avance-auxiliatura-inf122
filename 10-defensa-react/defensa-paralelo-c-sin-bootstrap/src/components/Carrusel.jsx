import { useState } from 'react';
import './Carrusel.css'


const Carrusel = ({imagenes}) => {
    const [index, setIndex] = useState(0);
    const images = imagenes
    
    const nextImage = () => {
        //prevINdex = 1 => 1 + 1 = 2 % 4 = 2
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        //prevINdex = 0 => 0 - 1 + 4 = 5 % 4 = 1
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="carrusel">
            <div className="carrusel-container">
                <img src={images[index]} alt={`Imagen ${index + 1}`} className="carrusel-image" />
            </div>
            <button className="carrusel-button prev" onClick={prevImage}>
                &#8592; 
            </button>
            <button className="carrusel-button next" onClick={nextImage}>
                 &#8594;
            </button>
        </div>
    );
};

export default Carrusel;