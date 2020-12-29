
import { GrCart } from 'react-icons/gr'; 
import './navbar.css';
import NavItem from '../NavItem/navitem';


function Navbar({titulo, action}) {

    const menuItems = [
        {
            texto: 'Velas',
            ruta: '/categoria/velas',
        },
        {
            texto: 'Colitas',
            ruta: '/categoria/colitas',
        },
        {
            texto: 'Bee-wax wraps',
            ruta: '/categoria/beewaxwraps',
        },
        {
            texto: 'Pulseras',
            ruta: '/categoria/pulseras',
        }
    ]
 
    

    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <div class="navbar">
                  <div class="left">
                    <a href="navbar.jsx"><img src="img/leaves.png" alt="Logo de la marca, dos hojas que representan un corazon"/></a>
                  </div>
                <div class="right">
                  <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                    }
                    <li><a href="#" className='carrito'><GrCart /></a></li>
                    
                  </ul>
                  
                </div>
              </div>
                
            </div>
        </nav>
    )
}


 /* function Navbar() {
  return (

    <div class="navbar">
        <div class="left">
        <a href="navbar.jsx"><img src="img/leaves.png" alt="Logo de la marca, dos hojas que representan un corazon"/></a>
        </div>
        <div class="right">
            <ul>
                
                <li><a href="#">Velas</a></li>
                <li><a href="#">Colitas</a></li>
                <li><a href="#">Beewax wraps</a></li>
                <li><a href="#">Pulseras</a></li>
                <li><a href="#" className='carrito'><GrCart /></a></li>
                
            </ul>
        </div>
    </div>
    
  );
} */

export default Navbar;