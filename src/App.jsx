import './App.css';
import Contenedor from './componentes/ejercicio_4/contenedor/Contenedor.jsx';
import Menu from './componentes/ejercicio_4/menu/Menu.jsx';
import Rutas from './componentes/ejercicio_4/rutas/Rutas.jsx';

const App = () => {
  
  return (
    <>
    <Menu />
    <Contenedor>
     <Rutas/>
    </Contenedor>
  </>
  );
};

export default App;
