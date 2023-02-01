import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
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

  const inputAltura = (event) => {
    const result = parseFloat(event);
    setAltura(result.toFixed(2));
  }
 
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Prencha os dados para criar o card do Jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome do jogador'
          valor={nome}
          classe='campo-texto__input'
          classelabel='campo-texto__label'
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label='Posição'
          placeholder='Digite a posição do jogador'
          valor={cargo}
          classe='campo-texto__input'
          classelabel='campo-texto__label'
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label='Imagem'
          placeholder='Informe o endereço da imagem do jogador'
          valor={imagem}
          classe='campo-texto__input'
          classelabel='campo-texto__label'
          aoAlterado={valor => setImagem(valor)}
        />
        <CampoTexto
          label='Altura'
          placeholder='Informe a altura o jogador'
          valor={altura}
          classe='campo-texto__input altura'
          classelabel='campo-texto__label'
          tipo='number'
          aoAlterado={inputAltura}
        />
        <CampoTexto
          label='Peso'
          placeholder='Informe o peso do jogador'
          valor={peso}
          classe='campo-texto__input'
          classelabel='campo-texto__label'
          tipo='number'
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