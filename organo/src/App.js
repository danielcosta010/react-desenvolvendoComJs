import { useState } from 'react';
import Maquina from './componentes/Animation';
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
      nome: 'Cincinnati Bengals - AFC NORTH',
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
    {
      nome:  'Denver Broncos - AFC WEST',
      corPrimaria: '#e05126',
      corSecundaria: '#032254'
    },
    {
      nome:  'Kansas City Chiefs - AFC WEST',
      corPrimaria: '#bf1605',
      corSecundaria: '#fb4f31'
    },
    {
      nome:  'Las Vegas Raiders - AFC WEST',
      corPrimaria: '#040707',
      corSecundaria: '#9b9c9e'
    },
    {
      nome:  'Los Angeles Chargers - AFC WEST',
      corPrimaria: '#2185bb',
      corSecundaria: '#ffc313'
    },
    {
      nome:  'Houston Texans - AFC SOUTH',
      corPrimaria: '#00123f',
      corSecundaria: '#c9243f'
    },
    {
      nome:  'Indianapolis Colts - AFC SOUTH',
      corPrimaria: '#00427e',
      corSecundaria: '#b9cbdb'
    },
    {
      nome:  'Jacksonville Jaguars - AFC SOUTH',
      corPrimaria: '#ce9d2c',
      corSecundaria: '#016274'
    },
    {
      nome:  'Tennessee Titans - AFC SOUTH',
      corPrimaria: '#052d5e',
      corSecundaria: '#4295d1'
    },
    {
      nome:  'Chicago Bears - NFC NORTH',
      corPrimaria: '#f26522',
      corSecundaria: '#192952'
    },
    {
      nome:  'Detroit Lions - NFC NORTH',
      corPrimaria: '#0076b6',
      corSecundaria: '#bdc2c4'
    },
    {
      nome:  'Green Bay Packers - NFC NORTH',
      corPrimaria: '#203731',
      corSecundaria: '#f0bd3f'
    },
    {
      nome:  'Minnesota Vikings - NFC NORTH',
      corPrimaria: '#4d2681',
      corSecundaria: '#4d2681' 
    },
    {
      nome:  'Dallas Cowboys - NFC EAST',
      corPrimaria: '#00295b',
      corSecundaria: '#aebacb' 
    },
    {
      nome:  'New York Giants - NFC EAST',
      corPrimaria: '#003d7e',
      corSecundaria: '#fafbfb' 
    },
    {
      nome:  'Philadelphia Eagles - NFC EAST',
      corPrimaria: '#052f3a',
      corSecundaria: '#3f9b8d' 
    },
    {
      nome:  'Washington Commanders - NFC EAST',
      corPrimaria: '#5a1313',
      corSecundaria: '#efa713' 
    },
    {
      nome:  'Arizona Cardinals - NFC WEST',
      corPrimaria: '#b0063a',
      corSecundaria: '#b0063a' 
    },
    {
      nome:  'Los Angeles Rams - NFC WEST',
      corPrimaria: '#003593',
      corSecundaria: '#ffc100' 
    },
    {
      nome:  'San Francisco 49ers - NFC WEST',
      corPrimaria: '#b8083e',
      corSecundaria: '#ffffff' 
    },
    {
      nome:  'Seattle Seahawks - NFC WEST',
      corPrimaria: '#002a5c',
      corSecundaria: '#b2b7bb' 
    },
    {
      nome:  'Atlanta Falcons - NFC SOUTH',
      corPrimaria: '#bc223b',
      corSecundaria: '#000000' 
    },
    {
      nome:  'Carolina Panthers - NFC SOUTH',
      corPrimaria: '#002e41',
      corSecundaria: '#002e41' 
    },
    {
      nome:  'New Orleans Saints - NFC SOUTH',
      corPrimaria: '#002e41',
      corSecundaria: '#868686' 
    },
    {
      nome:  'Tampa Bay Buccaneers - NFC SOUTH',
      corPrimaria: '#a31d2f',
      corSecundaria: '#565051' 
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
      <Maquina />
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