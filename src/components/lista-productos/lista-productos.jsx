import Producto from '../producto/producto';
import {useState, useEffect} from 'react';
import './lista-productos.css';

const ListaProductos = () => {
    const [items, setItems] = useState([]);
    const productos = [
        {
            id: 1,
            nombre: 'vela 1',
            precio: 240
        },

        {
            id: 2,
            nombre: 'vela 2',
            precio: 240
        },

        {
            id: 3,
            nombre: 'vela 3',
            precio: 240
        },

        {
            id: 4,
            nombre: 'vela 4',
            precio: 240
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(productos);
        }, 3000)
    })

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
    }, []);

    return (
        <div className= 'listaProductos'>
            <div className="producto">

                {
                    items.length ?
                    <>
                        <h2>Velas aromaticas</h2>

                        <ul>
                            {
                                items.map (items => (
                                    <li key={items.id}>
                                        <Producto
                                            titulo={items.titulo}
                                            precio={items.precio}
                                            id={items.id}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className='cargando'>Cargando productos...</p>
                }
            </div> 
        </div>
    ) 
}
export default ListaProductos;