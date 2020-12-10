import './carrito.css';


const Velas = ({children}) => {
    return (
        <div class="contenedor-productos">
         <div class="producto">
            <div class="imagen-producto">
                <img src="img/vela1.jpeg" />
            </div>
            <div class="nombre-producto">
                <h5>Vela aromatica de cera de soja</h5>
                <h6>$240</h6>
            </div>
        </div>

        <div class="producto">
            <div class="imagen-producto">
                <img src="img/vela2.jpeg" />
            </div>
            <div class="nombre-producto">
                <h5>Vela aromatica de cera de soja</h5>
                <h6>$240</h6>
            </div>
        </div>

        <div class="producto">
            <div class="imagen-producto">
                <img src="img/vela3.jpeg" />
            </div>
            <div class="nombre-producto">
                <h5>Vela aromatica de cera de soja</h5>
                <h6>$240</h6>
            </div>
        </div>

        </div>    
    );
  }
  
  export default Velas;