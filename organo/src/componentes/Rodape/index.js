import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='footer'>
      <div className='footer__itens'>
        <div>
          
          <a href='https://github.com/danielcosta010' target="_blank" rel="noopener noreferrer"><img className='facebook' src='./img/github.png' alt='Link para o github'></img></a>
          <a href='https://www.linkedin.com/in/daniel-costa010/' target="_blank" rel="noopener noreferrer"><img className='instagram' src='./img/linkedin.png' alt='link para o linkedin'></img></a>
          <a href='https://danielcosta010.github.io/portfolio/' target="_blank" rel="noopener noreferrer"><img className='twitter' src='./img/website.png' alt='linkpara o twitter'></img></a>
        </div>
        
        <a href='https://www.nfl.com/' target="_blank" rel="noopener noreferrer"><img src='./img/logonfl.png' alt='link para o site da nfl' className='logonfl__footer'></img></a>
        <h4 className='titulo__footer'>Desenvolvido por Daniel Costa, Curso React Alura</h4>
      </div>
      <img className='img__background' src='./img/rodapenflcampo.png' alt='Imagem do rodape campo de futebol americano'/>
    </footer>
  )
}

export default Rodape