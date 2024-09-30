import React from 'react';
import Contenedor from './componentes/contenedor/Contenedor.jsx';

import Interprete from './componentes/interprete/Interprete.jsx';

const App = () => {
  return (
    <Contenedor>
      <h1>Contenido dentro del contenedor</h1>
      <div>
        <Interprete 
        nombre = "TEEMO"
        imagen = "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2017/07/05/B783CFA6-3B58-42DA-9DC8-4AC80790CBDE/69.jpg?crop=1024,576,x0,y0&width=1280&height=720&optimize=high&format=webply"
        >Teemo es el valiente líder de los Exploradores de Bandle, un grupo de intrépidos yordles que se dedican a explorar Runaterra mientras aprenden sobre el vasto mundo.</Interprete>
      </div>
    </Contenedor>
  );
};

export default App;
