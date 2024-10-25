import './App.css';
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import Menu from './componentes/ejercicio_4/menuPrincipal/menu/Menu.jsx';
import Rutas from './componentes/ejercicio_4/app/rutas/Rutas.jsx';
import PieDePagina from './componentes/ejercicio_4/app/pieDePagina/PieDePagina.jsx';
import Contenido from './componentes/ejercicio_4/app/contenido/Contenido.jsx';
import Cabecera from './componentes/ejercicio_4/app/cabecera/Cabecera.jsx';

const App = () => {
  
  return (
    <>
    <Contenedor>
      <Cabecera>Esto es la Cabecera</Cabecera>
      <Menu/>
        <Contenido>
          <Rutas/>
        </Contenido>
      <PieDePagina>Esto es el Pie de Pagina</PieDePagina>
    </Contenedor>
  </>
  );
};

export default App;
