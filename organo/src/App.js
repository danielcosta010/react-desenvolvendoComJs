import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;

// Figma

/* https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134%3A143&t=Vjqg4jlWaThgRmPo-0 */