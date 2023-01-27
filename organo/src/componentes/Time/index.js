import Colaboradores from '../Colaboradores'
import './Time.css'

const Time = (props) => {
  const cssBackground = {backgroundColor: props.corSecundaria}
  const cssBorder = { borderColor: props.corPrimaria}

  return (
    <section className='time' style={cssBackground}>
      
      <h3 style={cssBorder}>{props.nome}</h3>
      <Colaboradores/>
    </section>
  )
}

export default Time