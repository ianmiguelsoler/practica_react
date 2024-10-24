import './App.css';
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import Menu from './componentes/ejercicio_4/menuPrincipal/menu/Menu.jsx';
import Rutas from './componentes/ejercicio_4/app/rutas/Rutas.jsx';

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
