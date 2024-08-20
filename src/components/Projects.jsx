import React from 'react';
import Project from './Project';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled(motion.div)`
  /* text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  font-weight: 600; */

  display: inline-block;
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  margin-bottom: 50px;
  /* border: 2px solid green; */

 &::after{
  content: '';
  position: absolute;
  bottom: -1px;
  height: 2px;
  left: 10%;
  width: 80%;
  background-color: black;
 }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export default function Projects() {
  return (
    <>
    <Container>
      <Title
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        // className='project-title'
      >
        PROJECTS
      </Title>
      </Container>

      <Project
        mainImg="/aphroditeMain.png"
        leftImg="/aphrodite-gallery.jpg"
        title="Yacht Charter"
        description="Miami based Yacht Charter firm. Designed using Next.js, this project aims to deliver a seamless and efficient experience for clients, administrators and staff. Service Log Management, database will meticulously track service logs and maintenance records for the boat. Comprehensive Admin Panel: The backend features an intuitive admin panel to manage employee information and service details effectively."
        liveCode="https://charter-ebon.vercel.app/"
        sourceCode="https://github.com/marceloaraujodev/charter"
        tecnologies="React, Javascript, Next.js, MongoDB, CSS, HTML, API, Node.js"
        $btnColor="$black"
      />

      <Project
        mainImg="/ecomm.jpg"
        leftImg="/ecomH1.jpg"
        title="WebStore"
        description="Full Ecommerce website, basically 2 projects one as the frontend and one as the dashboard for admins. Lets you create and control new items, categories, check orders status (paid or not). 2 different databases for the frontend and the dashboard giving greater control of newsletter emails, clients orders which are displayed in the frontend, backend orders, oauth logins with google, AWS and more."
        liveCode="https://next-js-ecommerce-n5i9.vercel.app/"
        sourceCode="https://github.com/marceloaraujodev/NextJsEcommerce"
        tecnologies="Next.js, React, Styled Components, Axios, AWS, MongoDb, NextAuth, Bootstrap and Stripe for payments."
      />
      <Project
        mainImg="/userview.png"
        leftImg="/mybankregister.png"
        title="myBank"
        description="I developed a robust mock banking app featuring account management, transfers, loans, balances, and sortable transactions. Key security measures include bcrypt for password encryption, ensuring passwords are stored securely and remain inaccessible to admins. The app employs httpOnly cookies to store JSON Web Tokens for secure user verification during login and transactions. A session timer logs users out and clears cookies after 5 minutes of inactivity. Comprehensive CRUD operations—such as account creation, deletion, money transfers, and loan requests—are seamlessly managed and stored in MongoDB Atlas."
        liveCode="https://mybank-client.onrender.com/"
        sourceCode="https://github.com/marceloaraujodev/myBank"
        tecnologies="React, Axios, MongoDb, Node.js, Json web token, mongoose, bcrypt"
        $btnColor="$black"
      />
      <Project
        mainImg="/woovi-main.jpg"
        leftImg="/woovi-secondary.jpg"
        title="Woovi"
        description="
          This project involved a Frontend Engineer Challenge for a Brazilian fintech company. The objective was to accurately recreate a series of designs provided in a Figma file. These designs were replicas of the company's existing working designs. The challenge tested my skills in converting visual design into functional frontend code, ensuring pixel-perfect accuracy and responsiveness. Here is a link for the challenge specs: https://woovi.com/jobs/challenges/frontend-engineer/
          "
        liveCode="https://woovi.onrender.com/"
        sourceCode="https://github.com/marceloaraujodev/woovi"
        tecnologies="React, Figma, Styled Components, React Router Dom"
        $btnColor="$black"
      />

      <Project
        mainImg="/echo.jpg"
        leftImg="/echo2.jpg"
        title="Echo Figma Design to Code"
        description="I converted a Figma design into responsive UIs using React.js, Bootstrap, and Vite. Through meticulous attention to detail, I ensured the faithful translation of the design into code, maintaining consistency and optimal user experience across devices. Leveraging React.js for modular components, Bootstrap for design consistency, and Vite for efficient development, I delivered a seamless convergence of design and functionality. The result is a user-friendly website that mirrors the original design's aesthetic appeal while offering a dynamic and responsive user experience."
        liveCode="https://figmatocodeecho.onrender.com"
        sourceCode="https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/FigmaToCode/EcoDental"
        tecnologies="React, Vite, Javascript, CSS, HTML, Figma"
        $btnColor="$black"
      />

      <Project
        mainImg="/blog1.jpg"
        leftImg="/blog4.jpg"
        title="It Blog"
        description="Register and edit your post, designed with mongodb using atlas, express and nodejs for the backend. There is an option to buy the look from the post. Stripe was implemented as the payment method. AWS S3 to store the images, hosting on render.com."
        liveCode="https://itblog.onrender.com"
        sourceCode="https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/Blog"
        tecnologies="React, Javascript, Nodejs, MongoDB, CSS, HTML, Bootstrap, Json Web Token, bcrypt, stripe"
        $btnColor="$black"
      />
      <Project
        mainImg="/shop-cart-page.jpg"
        leftImg="/shop-cart-page-modal.jpg"
        title="Product Cart Page"
        description="This product page interface includes comprehensive cart functionality, featuring a modal with a photo gallery and thumbnail images. The cart total is dynamically updated as new items are added, and the number of items in the cart is prominently displayed above the cart icon, serving as a visual reminder for users. Additionally, the interface showcases detailed price descriptions, including promotional tags, original prices, and discounted prices, effectively creating a sense of urgency to encourage purchases."
        liveCode="https://shopcartpage.onrender.com/"
        sourceCode="https://github.com/marceloaraujodev/shopCartPage"
        tecnologies="Javascript, HTML, CSS"
        $btnColor="$black"
      />
    </>
  );
}
