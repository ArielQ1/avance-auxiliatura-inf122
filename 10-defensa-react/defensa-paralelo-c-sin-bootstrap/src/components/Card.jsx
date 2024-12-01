import './Card.css';

const Card = ({imagen, titulo, descripcion}) => {
    return (
        <div className="card">
            <img src={imagen} alt="imagen" />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
}

export default Card;