
import './navbar.css';

function Navbar() {
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
            </ul>
        </div>
    </div>
  );
}

export default Navbar;