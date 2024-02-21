import Nav from './components/Nav';
import Home from './components/Home';
import FooterComponent from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

import './App.css'


function App() {

  return (
    <>
      <div className='container'>
        <Nav/>
        <main>
          <Home />
          <Projects />
          <About />
        </main>
        <FooterComponent />
      </div>
    </>
  )
}

export default App
