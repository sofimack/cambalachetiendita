import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <p>Carrito</p>

            {
                data.items.map(item => <h2>{item.title}</h2>)
            }
        </>
    )
}

export default Cart;