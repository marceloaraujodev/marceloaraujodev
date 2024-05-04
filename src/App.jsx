
import Nav from './components/Nav';
import FooterComponent from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import BlogProject from './components/BlogProject';
import ShopCartProject from './components/ShopCartProject';
import FipeProject from './components/FipeProject';
import './App.css';
import CharterBoats from './components/CharterBoats';
import FigmaToCode from './components/FigmaToCode';
import FigmaToCode2 from './components/FigmaToCode2';
import ConceptColchoes from './components/ConceptColchoes';




function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <Home />
          <CharterBoats />
          <FigmaToCode />
          <BlogProject />
          <FigmaToCode2 />
          <ShopCartProject />
          <ConceptColchoes />
          <FipeProject />
          <About />
        </main>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
