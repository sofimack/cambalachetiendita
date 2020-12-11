
import './App.css';
import Navbar from './components/navbar/navbar';
import ListaProductos from './components/lista-productos/lista-productos';

function App() {
  return (
    <div className="App">
      <Navbar />


      <h1>Cambalache Tiendita</h1>
      <h2>Bienvenidxs! </h2>

      <ListaProductos />
    </div>
  );
}

export default App;
