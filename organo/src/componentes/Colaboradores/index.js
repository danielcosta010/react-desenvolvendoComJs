import './Colaboradores.css'

const Colaboradores = ({nome, cargo, imagem, altura, peso, corDeFundo}) => {
  const alternativo = 'Foto de perifl do jogador'
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
      <img src={imagem} alt={alternativo + " " + nome}></img>
      </div>
      <div className='rodape'>
        <h4 className='nome'>{nome}</h4>
        <h5>{cargo}</h5>
        <div className='altura-peso'>
          <p>Altura: {altura}m</p>
          <p>Peso: {peso}Kg</p>
        </div>
      </div>
    </div>
  )
}

export default Colaboradores