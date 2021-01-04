import {useEffect} from 'react';
import {Switch, useParams} from 'react-router-dom';

const Category = () => {
    const {categoria_name} = useParams();

    const queCategoriaEs = (cat) => {
        switch(cat) {
            case 'velas': return <p>Estoy en camas</p>;
            case 'colitas': return <p>Estoy en juguetes</p>;
            case 'wraps': return <p>Estoy en ropa</p>
            case 'pulseras': return <p>Estoy en ropa</p>
            default: return <p>la categoría no existe</p>
        }
    }
    console.log (categoria_name)

    return (
        <>
            {
               queCategoriaEs(categoria_name) 
            }
        </>
    )
}

export default Category;