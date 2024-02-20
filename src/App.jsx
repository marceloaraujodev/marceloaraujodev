import Nav from './components/Nav';
import Home from './components/Home';
import FooterComponent from './components/Footer';
import Projects from './components/Projects';

import './App.css'


function App() {

  return (
    <>
      <div className='container'>
        <Nav/>
        <main>
          <Home />
          <Projects />
        </main>
      </div>
        <FooterComponent />
    </>
  )
}

export default App
