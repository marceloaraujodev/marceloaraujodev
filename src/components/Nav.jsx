

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
                <ul className="nav_list">
                    <li className="nav_item">
                        <a onClick={() => scrollToSection('home')}>Home</a>
                    </li>
                    <li className="nav_item">
                    <a onClick={() => scrollToSection('about')}>About</a>
                    </li>
                    <li className="nav_item">
                    <a onClick={() => scrollToSection('projects')}>Projects</a>
                    </li>
                    <li className="nav_item">
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
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
