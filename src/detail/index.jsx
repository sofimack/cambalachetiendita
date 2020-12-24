import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';

const Detail = () => {
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "Vela aromatica",
                foto: "http://placehold.it/350x400",
                descripcion: " Vela de cera de soja.",
                precio: 400
            })
        }, 1500);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                    <ProductDetail item={product} />

                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detail;