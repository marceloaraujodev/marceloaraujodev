import {Link} from 'react-router-dom';
import About from './About';
export default function Nav() {
     
    const scrollToSection = (id) => {
        const navbarHeight = document.querySelector('.nav').offsetHeight;
        const section = document.getElementById(id);
        const sectionPosition = section.offsetTop - navbarHeight;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        })
    }


  return (
    <>
    <header className="header">
        <nav className="nav">
            {/* <div className="logo">Logo</div> */}
            <div className="nav_menu">
            <i className="bi bi-list small-menu"></i>
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link to='/'>Home</Link>
                        {/* <a onClick={() => scrollToSection('home')}>Home</a> */}
                    </li>
                    <li className="nav_item">
                    {/* <a onClick={() => scrollToSection('about')}>About</a> */}
                    <Link to='/about'>About</Link>
                    </li>
                    <li className="nav_item">
                    {/* <a onClick={() => scrollToSection('projects')}>Projects</a> */}
                    <Link to='/projects'>Projects</Link>
                    </li>
                    <li className="nav_item">
                    <a href="mailto:marcelo.dev.coder@gmail.com">Contact</a>
                    </li>
                </ul>
            </div>
            {/* <div className="">
                MailIcon
            </div> */}
        </nav>
    </header>

    </>
  )
}
