import { useState } from 'react';
import Modal from './Modal';
import Resume from './Resume';
import { useInView } from 'react-intersection-observer';
import TechCards from './TechCards';
import styled from 'styled-components';

const CardSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  flex-wrap: wrap;
  margin: 0 auto;
  @media screen and (max-width: 768px){
    width: 100%;
    /* margin: 0; */
    max-width: 100%;
  }
`;

const SkillsListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  li{
    font-size: 0.9rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px){
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const SoftSkills = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border: 2px solid rgb(215, 215, 215);
  padding: 30px;
  border-radius: 5px;
  width: 40%;
  background-color: rgb(250, 250, 250);
  @media screen and (max-width: 768px){
    width: 100%;
  }
  `;

const Courses = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border: 2px solid rgb(215, 215, 215);
  padding: 30px;
  border-radius: 5px;
  width: 60%;
  background-color: rgb(250, 250, 250);
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 10px 0;
`;

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const { ref, inView } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgView } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });

  function openModal(imgSrc) {
    setModalOpen(true);
    setSelectedImg(imgSrc);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <div
        className={`about-container ${inView ? 'animated ' : ''}`}
        ref={ref}
        id="about">
        <div className={`about-title`}>About Me</div>
        <section className={`about `}>
          {/* <p className='about-text'>Born in Brazil, <span className='about-bold'>lived in Los Angeles for 14 years.</span> Currently living between Miami and Brazil. 
        </p>
        <p className='about-text'><span className='about-bold'>Full-Stack Software Engineer</span>. Former online Entrepreneur, Fashion photographer and professional Surfer. Happy with my new career in coding.</p> */}

          <p>
            Welcome to my portfolio. I am a full stack developer with extensive
            experience in front and backend development, utilizing technologies
            such as React, MongoDB, Next.js, Styled Components, JavaScript, AWS,
            Firebase, Figma, and REST APIs.
            <br></br>
            <br></br>I am adept at designing and implementing robust, scalable
            solutions that drive business success.
            <br></br>
            <br></br>I am particularly skilled in React and Next.js for building
            dynamic, responsive user interfaces, and I have a strong command of
            backend technologies like MongoDB and AWS to ensure secure and
            efficient data management. My expertise in Styled Components and
            JavaScript allows me to create visually appealing and
            high-performance applications.
            <br></br>
            <br></br>I am seeking a full stack developer role where I can apply
            my technical skills and innovative mindset to solve complex problems
            and contribute to a forward-thinking team. I am committed to
            delivering high-quality work that exceeds expectations. Thank you
            for considering my portfolio. I look forward to the opportunity to
            bring my skills and dedication to your organization.
            {/* Hi, thanks for your interest in my portfolio. I&apos;ve had a few different careers over the years. I&apos;m a former professional surfer, I competed in the World Qualifying Series from 2001 until 2007.
          <br></br>
          <br></br>
          In 2008 I started working with WaveDataSystems using their beach bytes software,
          a program that calculates the scores for surfing competition. I worked with them 
          for one year. 
          <br></br>
          <br></br>
          In the middle of 2009 I started a online business reselling products
          that I imported from china on ebay and amazon. In 2012 I started
          working with photography, I&apos;ve started with portraits then
          shooting behind the scenes of movies and then moved into fashion
          photography.
          <br></br>
          <br></br>
          In the middle of 2023 I started studing front and backend development.
          I always had a strong interest in coding since I made my first
          website as a portfolio for my surfing career back in 2002. I used to
          stay all night long researching on google to fix small bugs on my html
          code.
          <br></br>
          <br></br>I had a friend that was a hacker, I used to ask him for some
          tips on how to fix my code and he would always send me links of the
          documentation. It was a lot of fun and sleepless nights. I&apos;m
          looking for a full stack developer job. I&apos;m very focus, driven
          and have a strong mindset to get things done and problems solved. */}
            <br></br>
            <br></br>
            <Title>
              Hard Skills:
            </Title>
            <CardSkillsContainer>
              <TechCards img="/jslogo.png" techName="JavaScript" />
              <TechCards img="/react-logo.png" techName="React" />
              <TechCards img="/nodejslogo.png" techName="Node.js" />
              <TechCards img="/mongodblogo.png" techName="MongoDB" />
              <TechCards img="/csslogo.png" techName="css" />
              <TechCards img="/bootstraplogo.png" techName="bootstrap" />
            </CardSkillsContainer>
            <br></br>
            <br></br>
          </p>

          <SkillsListContainer>
          <SoftSkills>
          <Title>
            Soft Skills:
          </Title>
          <ul>
          <li>Leadership</li>
            <li>Communication</li>
            <li>Adaptability </li>
            <li>Time Management</li>
            <li>Customer Service</li>
          </ul>
          </SoftSkills>
          <br />
          <Courses>
          <Title>
            Courses:
          </Title>
          <ul>
            <li>
              The Complete JavaScript Course From Zero to Expert by Jonas Schmedtmann
            </li>
            <li>
              React - The Complete Guide 2024 by Maximilian Schwarzmüller
            </li>
            <li>
              Node.js, Express, MongoDB & More The Complete Bootcamp 2024s by Jonas Schmedtmann
            </li>
            <li>
              The Complete 2024 Web Development Bootcamp by Dr. Angela Yu
            </li>
            <li>Zero to Mastery - Complete Web Developer</li>

          </ul>

          </Courses>


          </SkillsListContainer>

        </section>
      </div>
      <div
        className={`about-img-container ${imgView ? 'animated2' : ''}`}
        ref={imgRef}>
        <img
          src="/selfie.jpg"
          alt="portrait in the mirror"
          className="about-images"
          onClick={() => openModal('/selfie.jpg')}
        />
        <img
          src="/work.jpg"
          alt="woman portrait"
          className="about-images"
          onClick={() => openModal('/work.jpg')}
        />
        <img
          src="/IMG_3592-2.jpg"
          alt="surfing"
          className="about-images"
          onClick={() => openModal('/IMG_3592-2.jpg')}
        />
      </div>
      {modalOpen && (
        <Modal isOpen={modalOpen}>
          <img src={selectedImg} alt="selected img" />
          <button className="btnModal" onClick={closeModal}>
            X
          </button>
        </Modal>
      )}

      <Resume />
    </>
  );
}
