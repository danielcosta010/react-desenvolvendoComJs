import { useState } from 'react'
import Botao from '../Botao'
import FildText from '../FildText/FildText'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      altura,
      peso,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setAltura('')
    setPeso('')
    setTime('')
    
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Prencha os dados para criar o card do Jogador</h2>
        <FildText
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome do jogador'
          valor={nome}
          classe= 'fildtext__input'
          classelabel= 'fild-text__label'
          aoAlterado={valor => setNome(valor)}
        />
        <FildText
          obrigatorio={true}
          label='Posição'
          placeholder='Digite a posição do jogador'
          valor={cargo}
          classe= 'fildtext__input'
          classelabel= 'fild-text__label'
          aoAlterado={valor => setCargo(valor)}
        />
        <FildText
          label='Imagem'
          placeholder='Informe o endereço da imagem do jogador'
          valor={imagem}
          classe= 'fildtext__input'
          classelabel= 'fild-text__label'
          aoAlterado={valor => setImagem(valor)}
        />
        <FildText
          label='Altura'
          placeholder='Informe a altura do jogador'
          valor={altura}
          classe= 'altura'
          classelabel='altlabel'
          aoAlterado={valor => setAltura(valor)}
        />
        <FildText
          label='Peso'
          placeholder='Informe o peso do jogador'
          valor={peso}
          classe= 'peso'
          classelabel='peslabel'
          aoAlterado={valor => setPeso(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true} 
        label='Time' 
        itens={props.soNomes} 
        valor={time}
        aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario