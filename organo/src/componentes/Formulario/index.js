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
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Prencha os dados para criar o card do colaborador</h2>
        <FildText
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <FildText
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <FildText
          label='Imagem'
          placeholder='Informe o endereço da imagem'
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