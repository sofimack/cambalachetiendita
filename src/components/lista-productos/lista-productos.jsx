import Producto from '../producto/producto';
import './lista-productos.css';

const ListaProductos = () => {
    return (
        <section className="listaProductos">
            <div className="container">
                <h2>Velas</h2>

                <ul>
                    <li><Producto titulo="Vela de naranja" precio="240" /></li>
                    <li><Producto titulo="Vela de jazmin" precio="240" /></li>
                    <li><Producto titulo="Vela de coco" precio="240" /></li>
                    <li><Producto titulo="Vela de vainilla" precio="240" /></li>
                </ul>
            </div>
        </section>
    )
}

export default ListaProductos;