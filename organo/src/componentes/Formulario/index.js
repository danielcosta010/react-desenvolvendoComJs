import { useState } from 'react'
import Botao from '../Botao'
import FildText from '../FildText/FildText'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
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
          aoAlterado={valor => setNome(valor)}
        />
        <FildText
          obrigatorio={true}
          label='Posição'
          placeholder='Digite a posição do jogador'
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <FildText
          label='Imagem'
          placeholder='Informe o endereço da imagem do jogador'
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
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