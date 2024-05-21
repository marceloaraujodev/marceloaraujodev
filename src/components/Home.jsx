import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {

  return (
    <section className="home" id='home'>
        <div className="name">MARCELO ARAUJO</div>
        <div className="title">DEVELOPER</div>
        <div className='social'>
            <a href='https://github.com/marceloaraujodev'><i className="bi bi-github social-media"></i></a>
            <a href='https://www.linkedin.com/in/marcelo-araujo-9a41a829a/'><i className="bi bi-linkedin social-media"></i></a>
            <a href="mailto:marcelo.dev.coder@gmail.com"><i className="bi bi-envelope social-media"></i></a>
        </div>
          {/* <img className='photo' src='/profilePicSquare2.png' alt=''/> */}

    </section>
  )
}
