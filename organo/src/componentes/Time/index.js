import Colaboradores from '../Colaboradores'
import './Time.css'

const Time = (props) => {
  const cssBackground = { backgroundColor: props.corSecundaria }
  const cssBorder = { borderColor: props.corPrimaria }

  return (
    props.colaboradores.length > 0 ? <section className='time' style={cssBackground}>

      <h3 style={cssBorder}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador =>
          <Colaboradores
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            altura={colaborador.altura}
            peso={colaborador.peso}
            imagem={colaborador.imagem}
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
          />
        )}
      </div>
    </section>
      : ''
  )
}

export default Time