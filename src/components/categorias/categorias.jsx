import {useEffect} from 'react';
import {Switch, useParams} from 'react-router-dom';

const Category = () => {
    const {categoria_nombre} = useParams();

    const queCategoriaEs = (cat) => {
        switch(cat) {
            case 'velas': return <p>Estoy en camas</p>;
            case 'colitas': return <p>Estoy en juguetes</p>;
            case 'wraps': return <p>Estoy en ropa</p>
            case 'pulseras': return <p>Estoy en ropa</p>
            default: return <p>la categoría no existe</p>
        }
    }

    return (
        <>
            {
               queCategoriaEs(categoria_nombre) 
            }
        </>
    )
}

export default Category;