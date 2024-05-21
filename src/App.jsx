
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
import Titles from './components/Titles';




function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <Home />
          <Titles 

            mainImg='/ecomm.jpg'
            leftImg='/ecomH1.jpg'
            title='WebStore'
            liveCode='https://next-js-ecommerce-n5i9.vercel.app/'
            sourceCode='https://github.com/marceloaraujodev/NextJsEcommerce'
            tecnologies='Next.js, React, Styled Components, Axios, Aws, MongoDb, NextAuth, Bootstrap and Stripe for payments.'
           />

           <Titles 
            mainImg='/aphrodite.jpg'
            leftImg='/aphrodite-gallery.jpg'
            title='Yacht Charter'
            liveCode='https://charter-ebon.vercel.app/'
            sourceCode='https://github.com/marceloaraujodev/charter'
            tecnologies='React, Javascript, Nextjs, MongoDB, CSS, HTML'
            $btnColor='$black'
           />

           <Titles 
            mainImg='/echo.jpg'
            leftImg='/echo2.jpg'
            title='Echo Figma Design to Code'
            liveCode='https://figmatocodeecho.onrender.com'
            sourceCode='https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/FigmaToCode/EcoDental'
            tecnologies='React, Vite, Javascript, CSS, HTML, Figma'
            $btnColor='$black'
           />
          {/* <CharterBoats /> */}
          {/* <FigmaToCode /> */}
          <BlogProject />
          {/* <FigmaToCode2 /> */}
          {/* <ShopCartProject /> */}
          {/* <ConceptColchoes /> */}
          {/* <FipeProject /> */}
          {/* <About /> */}
        </main>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
