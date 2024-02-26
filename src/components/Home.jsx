import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {

  return (
    <section className="home" id='home'>
        <div className="name">MARCELO ARAUJO</div>
        <div className="title">DEVELOPER</div>
        <div className='social'>
            <i className="bi bi-github social-media"></i>
            <i className="bi bi-linkedin social-media"></i>
            <i className="bi bi-envelope social-media"></i>
        </div>
          <img className='photo' src='/profilePicSquare2.png' alt=''/>

    </section>
  )
}
