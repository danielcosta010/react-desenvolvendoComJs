import './FildText.css'

const FildText = (props) => {
  
  return (
    <div className='fild-text'>
      <label >{props.label}</label>
      <input placeholder={props.placeholder}/>
    </div>
  )
}

export default FildText