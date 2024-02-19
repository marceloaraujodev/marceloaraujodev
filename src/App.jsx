import Nav from './components/Nav';
import Home from './components/Home';
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <Nav/>
        <main>
          <Home />
        </main>
      </div>
    </>
  )
}

export default App
