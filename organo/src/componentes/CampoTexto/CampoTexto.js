import './CampoTexto.css'

const CampoTexto = (props) => {
   

  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  }

  

  return (
    <div className='campo-texto'>
      <label className={props.classelabel}>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} className={props.classe} type={props.tipo}/>
    </div>
    
  )
}

export default CampoTexto