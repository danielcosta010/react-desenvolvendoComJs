import FildText from '../FildText/FildText'
import './Formulario.css'

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Prencha os dados para criar o card do colaborador</h2>
        <FildText label='Nome' placeholder='Digite seu nome' />
        <FildText label='Cargo' placeholder='Digite seu cargo' />
        <FildText label='Imagem' placeholder='Informe o endereço da imagem' />
      </form>
    </section>
  )
}

export default Formulario