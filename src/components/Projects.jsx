import React from 'react'
import Project from './Project'
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  /* margin-top: 100px; */
  font-weight: 600;
`;

export default function Projects() {
  return (
    <>

<Title>PROJECTS</Title>
    <Project
          mainImg="/ecomm.jpg"
          leftImg="/ecomH1.jpg"
          title="WebStore"
          description=""
          liveCode="https://next-js-ecommerce-n5i9.vercel.app/"
          sourceCode="https://github.com/marceloaraujodev/NextJsEcommerce"
          tecnologies="Next.js, React, Styled Components, Axios, Aws, MongoDb, NextAuth, Bootstrap and Stripe for payments."
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
          description="Transformed a Figma design into UIs using React.js, Bootstrap, and Vite."
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
