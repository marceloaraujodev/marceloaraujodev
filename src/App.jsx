
import Nav from './components/Nav';
import FooterComponent from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import BlogProject from './components/BlogProject';
import ShopCartProject from './components/ShopCartProject';
import FipeProject from './components/FipeProject';
import './App.css';
import CharterBoats from './components/CharterBoats';




function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <Home />
          <CharterBoats />
          <BlogProject />
          <ShopCartProject />
          <FipeProject />
          <About />
        </main>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
