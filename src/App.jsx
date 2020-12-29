
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ListaProductos from './components/lista-productos/lista-productos';
import Detail from './detail/index';
import Error404 from './components/Error404/error404';
import Category from './components/categorias/categorias';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      <Switch>
        <Route exact path="/">
          <ListaProductos />
        </Route>
        <Route path="/categoria/:categoria_name?">
          <Category />
        </Route>
        
        <Route path="/detail/:id">
          <Detail />
        </Route>
        
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>

      
    </BrowserRouter>
  );
}

export default App;
