import './Card.css'

const Card = ({titulo, imagen, parrafo}) => {
    return (
        <div className="contenedor">
            <h1 className="titulo">{titulo}</h1>
            <img src={imagen} alt="" />
            <p className="parrafo">{parrafo}</p>
        </div>
    )
}



export default Card;