import Nav from './components/Nav';
import Home from './components/Home';
import FooterComponent from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <Home />
          <div className="project-title"  id='projects'>Projects</div>
          <Projects
            image="blog.png"
            itemTitle="Blog"
            description="A Blog where you can register and edit your post, designed with mongodb using atlas to store the data, the backend was written in node. Everyone can view the posts, but only the creater can edit the post. There is an option to buy the look from the post. Stripe was implemented as the payment method. Im using google cloud to store the images (slow to load images) , fleek to host the frontend and render to host the server."
            langagues="React, Javascript, Nodejs, MongoDB, CSS, HTML"
            text="Live Code"
            href="https://summer-lab-1399.on.fleek.co/"
            text2="Source Code"
            href2="https://github.com/marceloaraujodev/Blog"
          />
          <Projects
            image="product-cart-page.png"
            itemTitle="Frontend Shopping Cart"
            description="Frontend shopping cart page, with a header. Calculates the values if user enters more than one product and automatically updates the cart with prices. Deletes items from the cart. Gallery page, with thumbnails, hero picture and also includes a modal when doubled clicked on the main image, gallery is fully functional on modal as well."
            langagues="Vanilla Javascript, CSS, HTML"
            text="Live Code"
            href="https://restless-sky-5936.on.fleek.co/"
            text2="Source Code"
            href2="https://github.com/marceloaraujodev/shopCartPage"
          />
          <Projects 
            image="fipe-cars.png"
            itemTitle="Fipe Car Prices"
            description="A fast app for checking car prices in Brazil. Choose a make, model and year and you will get the average selling prices for that car in Brazil. An API was used to get all the data need it."
            langagues="React, Bootstrap, Javascript"
            text="Live Code"
            href="https://twilight-smoke-3755.on.fleek.co/"
            text2="Source Code"
            href2="https://github.com/marceloaraujodev/fipe"
          />

          <About />
        </main>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
