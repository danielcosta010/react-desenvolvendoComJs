import './PulseChiefs.css'

const Pulse = () => {
  return (
    <div className='pulse__chiefs'>
      <a href="https://www.espn.com.br/nfl/time/_/nome/kc/kansas-city-chiefs" target='_blank' rel="noopener noreferrer">
        <img src='./img/logochiefs.png' className='pulse__img' alt='logo do kansas city chiefs'/>
      </a>
      <p className='pulse__titulo'>Kansas City Chiefs - Campeão do SuperBowl - <span className='pulse__titulo--go'>Go Chiiiieeefs</span></p>
    </div>
  )
}

export default Pulse