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

  &::after {
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
        tecnologies="React, Javascript, Next.js, MongoDB, CSS, HTML, API, Node.js"
        description={`Developed a full-stack yacht charter management application using Next.js and React, featuring a responsive UI and real-time user notifications with React Toastify. The application includes a dynamic admin dashboard for managing charter operations and role-based access control for various user types.<br /><br />

        Implemented secure authentication with NextAuth and bcrypt, with additional support for password recovery and email notifications through Nodemailer. The backend, powered by MongoDB and Mongoose, enables robust CRUD operations and effective data management.<br /><br />

        Incorporated data visualizations using Chart.js to track service expenses and managed file uploads with Firebase Storage and multer, including real-time progress tracking. The application ensures secure data exchange through CORS implementation and provides post-charter checklists for captains and crew, enhancing operational efficiency and user experience.<br /><br />
        
       <p><span>Tecnologies used:</span>React, Javascript, Next.js, MongoDB, CSS, HTML, API, Node.js</p>  
        `}
        liveCode="https://charter-ebon.vercel.app/"
        sourceCode="https://github.com/marceloaraujodev/charter"
        $btnColor="$black"
      />

      <Project
        mainImg="/ecomm.jpg"
        leftImg="/ecomH1.jpg"
        title="WebStore"
        description={`Comprehensive E-commerce Platform: This project consists of two integrated applications: a customer-facing storefront and an admin dashboard. <br /><br />
          
        The storefront allows users to browse and purchase products, with features like order tracking, secure payment processing, and OAuth login options (Google, AWS, and more). <br /><br />
        
        The admin dashboard provides robust tools for managing the entire e-commerce ecosystem, including creating and controlling product listings, organizing categories, and monitoring order statuses (paid or unpaid).<br /><br />

        The system utilizes two distinct databases, ensuring optimal control and security. One database powers the frontend, managing customer orders and newsletter subscriptions, while the other is dedicated to backend operations, enabling detailed analytics and efficient handling of admin functions.<br /><br />
        
        <p><span>Tecnologies used:</span>Next.js, React, Styled Components, Axios, AWS, MongoDb, NextAuth, Bootstrap and Stripe for payments</p>
        `}
        liveCode="https://next-js-ecommerce-n5i9.vercel.app/"
        sourceCode="https://github.com/marceloaraujodev/NextJsEcommerce"
      />
      <Project
        mainImg="/userview.png"
        leftImg="/mybankregister.png"
        title="myBank"
        description={`I developed a robust mock banking app featuring account management, transfers, loans, balances, and sortable transactions. Key security measures include bcrypt for password encryption, ensuring passwords are stored securely. <br /><br />
        
        The app employs httpOnly cookies to store JSON Web Tokens for secure user verification during login and transactions. A session timer logs users out and clears cookies after 5 minutes of inactivity. Comprehensive CRUD operations—such as account creation, deletion, money transfers, and loan requests—are seamlessly managed and stored in MongoDB Atlas.<br /><br />
        
        <p><span>Tecnologies used:</span>React, Axios, MongoDb, Node.js, JWT, mongoose, bcrypt</p>
        `}
        liveCode="https://mybank-client.onrender.com/"
        sourceCode="https://github.com/marceloaraujodev/myBank"
        $btnColor="$black"
      />
      <Project
        mainImg="/woovi-main.jpg"
        leftImg="/woovi-secondary.jpg"
        title="Woovi"
        description={`
          This project involved a Frontend Engineer Challenge for a Brazilian fintech company. <br /><br />
          
          The objective was to accurately recreate a series of designs provided in a Figma file. These designs were replicas of the company's existing working designs. <br /><br />
          
          The challenge tested my skills in converting visual design into functional frontend code, ensuring pixel-perfect accuracy and responsiveness.<br /><br /> Here is a link for the challenge specs: <br />https://woovi.com/jobs/challenges/frontend-engineer/<br /><br />

          <p><span>Tecnologies used:</span>React, Figma, Styled Components, React Router Dom</p>
          `}
        liveCode="https://woovi.onrender.com/"
        sourceCode="https://github.com/marceloaraujodev/woovi"
        $btnColor="$black"
      />

      <Project
        mainImg="/echo.jpg"
        leftImg="/echo2.jpg"
        title="Echo Figma Design to Code"
        description={`I converted a Figma design into responsive UIs using React.js, Bootstrap, and Vite. Through meticulous attention to detail, I ensured the faithful translation of the design into code, maintaining consistency and optimal user experience across devices.<br /><br />
        
        Leveraging React.js for modular components, Bootstrap for design consistency, and Vite for efficient development, I delivered a seamless convergence of design and functionality. The result is a user-friendly website that mirrors the original design's aesthetic appeal while offering a dynamic and responsive user experience.
        
        <p><span>Tecnologies used:</span>React, Vite, Javascript, CSS, HTML, Figma</p>
        `}
        liveCode="https://figmatocodeecho.onrender.com"
        sourceCode="https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/FigmaToCode/EcoDental"
        $btnColor="$black"
      />

      {/* <Project
        mainImg="/blog1.jpg"
        leftImg="/blog4.jpg"
        title="It Blog"
        description="Register and edit your post, designed with mongodb using atlas, express and nodejs for the backend. There is an option to buy the look from the post. Stripe was implemented as the payment method. AWS S3 to store the images, hosting on render.com."
        liveCode="https://itblog.onrender.com"
        sourceCode="https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/Blog"
        tecnologies="React, Javascript, Nodejs, MongoDB, CSS, HTML, Bootstrap, Json Web Token, bcrypt, stripe"
        $btnColor="$black"
      /> */}
      <Project
        mainImg="/shop-cart-page.jpg"
        leftImg="/shop-cart-page-modal.jpg"
        title="Product Page"
        description={`This product page interface includes comprehensive cart functionality, featuring a modal with a photo gallery and thumbnail images. <br /><br />
          
        The cart total is dynamically updated as new items are added, and the number of items in the cart is prominently displayed above the cart icon, serving as a visual reminder for users. <br /><br />
        
        Additionally, the interface showcases detailed price descriptions, including promotional tags, original prices, and discounted prices, effectively creating a sense of urgency to encourage purchases.

          <p><span>Tecnologies used:</span>React, Vite, Javascript, CSS, HTML, Figma</p>
        `}
        liveCode="https://shopcartpage.onrender.com/"
        sourceCode="https://github.com/marceloaraujodev/shopCartPage"
        tecnologies="Javascript, HTML, CSS"
        $btnColor="$black"
      />
    </>
  );
}
