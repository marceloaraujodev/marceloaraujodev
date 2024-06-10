import React from 'react'
import Project from './Project'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled(motion.h1)`
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;
  /* margin-top: 100px; */
  
  @media screen and (max-width: 768px){
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export default function Projects() {
  return (
    <>

  <Title
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
  >PROJECTS</Title>
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
          mainImg="/aphrodite.jpg"
          leftImg="/aphrodite-gallery.jpg"
          title="Yacht Charter"
          description="Yacht Charter Miami based firm. Designed with Nextjs, using Fullcalendar, React, framer motion."
          liveCode="https://charter-ebon.vercel.app/"
          sourceCode="https://github.com/marceloaraujodev/charter"
          tecnologies="React, Javascript, Nextjs, MongoDB, CSS, HTML"
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
    </>
  )
}
