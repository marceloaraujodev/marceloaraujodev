import Nav from './components/Nav';
import FooterComponent from './components/Footer';
import Home from './components/Hero';
import About from './components/About';
import BlogProject from './components/BlogProject';
import ShopCartProject from './components/ShopCartProject';
import FipeProject from './components/FipeProject';
import './App.css';
import CharterBoats from './components/CharterBoats';
import FigmaToCode from './components/FigmaToCode';
import FigmaToCode2 from './components/FigmaToCode2';
import ConceptColchoes from './components/ConceptColchoes';
import Titles from './components/Project';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Layout>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
              </Routes>
              {/* <Home /> */}
              {/* <HomePage /> */}
            </main>
          </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
