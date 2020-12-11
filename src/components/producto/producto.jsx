import './producto.css';

const Producto = ({titulo, precio}) => {
    return (
        <div className="producto">
            <img src="img/vela1.jpeg" alt="Vela de naranja y romero"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>
        </div>
    )
}

export default Producto;