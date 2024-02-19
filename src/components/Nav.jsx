

export default function Nav() {
  return (
    <>
    <header className="header">
        <nav className="nav">
            {/* <div className="logo">Logo</div> */}
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav_item">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav_item">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact">Contact</a>
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
