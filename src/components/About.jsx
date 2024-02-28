import { useState} from 'react';
import Modal from './Modal';
import { useInView } from 'react-intersection-observer';


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
    setSelectedImg(imgSrc)
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
     
      <div className={`about-container ${inView ? 'animated ' : ''}`} ref={ref}>
      <div className={`about-title`}  id='about'>About Me</div>
      <section className={`about `} >
        <p>
        Hi, thanks for your interest in my portfolio. I&apos;ve had a few different careers over the years. I&apos;m a former professional surfer, I competed in the World Qualifying Series from 2001 until 2007.
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
          and have a strong mindset to get things done and problems solved.
          <br></br>
          <br></br>
          Here are some of the courses that I took:
          <br></br>
          <br></br>
        </p>
        <ul>
            <li>
              The Complete JavaScript Course:<br></br>From Zero to Expert 68.5
              total hours of videos by Jonas Schmedtmann
            </li>
            <li>
              React - The Complete Guide 2024 Video:<br></br> 68.5 total hours
              by Maximilian Schwarzmüller
            </li>
            <li>
              Node.js, Express, MongoDB & More The Complete Bootcamp 2024:
              <br></br> 42 total hours of videos by Jonas Schmedtmann
            </li>
            <li>
              The Complete 2024 Web Development Bootcamp:<br></br> 62 total
              hours of videos by Dr. Angela Yu
            </li>
            <li>Zero to Mastery - Complete Web Developer</li>
          </ul>
      </section>
      </div>
      <div className={`about-img-container ${imgView ? 'animated2' : ''}`} ref={imgRef}>
        <img
          src="/selfie.jpg"
          alt="portrait in the mirror"
          className="about-images"
          onClick={() => openModal("/selfie.jpg")}
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
          onClick={() => openModal("/IMG_3592-2.jpg")}
        />
        </div>
      {modalOpen && <Modal isOpen={modalOpen} >
      <img src={selectedImg} alt='selected img' />
      <button className='btnModal' onClick={closeModal}>X</button>
      </Modal>}
    </>
  );
}
