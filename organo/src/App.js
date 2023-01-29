import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Baltimore Ravens - AFC NORTH',
      corPrimaria: '#23135f',
      corSecundaria: '#24135f99'
    },
    {
      nome: 'Cincinnat Bengals - AFC NORTH',
      corPrimaria: '#f54f15',
      corSecundaria: '#f54f1599'
    },
    {
      nome: 'Cleveland Browns - AFC NORTH',
      corPrimaria: '#331700',
      corSecundaria: '#33170099'
    },
    {
      nome: 'Pittsburgh Steelers - AFC NORTH',
      corPrimaria: '#f7b904',
      corSecundaria: '#b18c1b99'
    },
    {
      nome: 'Buffalo Bills - AFC EAST',
      corPrimaria: '#0a217f',
      corSecundaria: '#0a217f6b'
    },
    {
      nome: 'Miami Dolphins - AFC EAST',
      corPrimaria: '#00838d',
      corSecundaria: '#00848d5b'
    },
    {
      nome: 'New England Patriots - AFC EAST',
      corPrimaria: '#061630',
      corSecundaria: '#061630ba'
    },
    {
      nome: 'New York Jets - AFC EAST',
      corPrimaria: '#115740',
      corSecundaria: '#11574054'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />

      <Formulario soNomes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    
     

      {times.map(time =>
        <Time
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          key={time.nome}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )}

      <Rodape/>
    </div>
  );
}

export default App;

// Figma

/* https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134%3A143&t=Vjqg4jlWaThgRmPo-0 */