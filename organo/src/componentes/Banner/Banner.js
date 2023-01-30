import './Banner.css'

function Banner() {
  return (
    <header className='banner'>
      <div className='banner__descricao'>
        <h1>NFL - National Football League </h1>
        <p>Escolha seus jogadores favoritos e escale em seu time de coração</p>
        <div className='icones'> 
          <a href='https://www.espn.com.br/nfl/times' target="_blank" rel="noopener noreferrer"><img src='./img/logoespn.png' alt='Logo da espn Brasil' /></a>
          <a href='https://www.nfl.com/' target="_blank" rel="noopener noreferrer"><img src='./img/logonfl.png' alt='Logo da nfl' /></a>
        </div>
      </div>
      <img className='banner__imagem' src='/img/bannerNFL.png' alt='O banner principal da página organo'/>
    </header>
  )
}

export default Banner