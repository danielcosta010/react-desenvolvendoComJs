import './FildText.css'

const FildText = (props) => {
   

  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  }

  

  return (
    <div className='fild-text'>
      <label className={props.classelabel}>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} className={props.classe} type={props.tipo}/>
    </div>
    
  )
}

export default FildText