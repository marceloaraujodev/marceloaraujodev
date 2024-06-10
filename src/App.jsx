import About from './components/About';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
      {/* <Modal /> */}
      <Router>
        <div className="container">
          <Layout>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
