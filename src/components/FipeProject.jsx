import Button from './Button';
import useIntersectionObserver from './useIntersectionObserver';

export default function FipeProject() {
  const { 
    fipeRefImg,
    fipeRefInfo,
    inViewFipeImg,
    inViewFipeInfo
  
  } = useIntersectionObserver();

  return (
    <section className='projects'>
        <div >
          <img
            ref={fipeRefImg}
            className={`projects-images ${inViewFipeImg ? 'animated3' : ''}`}
            src={`/fipe-cars.png`}
            alt="project image"
          />
        </div>
        <div className={`projects-info ${inViewFipeInfo ? 'animated4' : ''}`} ref={fipeRefInfo}>
          <p className="projects-item-title">Fipe Car Prices</p>
          <p className="projects-description">A fast app for checking car prices in Brazil. Choose a make, model and year and you will get the average selling prices for that car in Brazil. An API was used to get all the data need it.</p>
          <div className="projects-langagues">React, Bootstrap, Javascript</div>
          <div className="btn-container">
            <Button text='Live Code' href="https://portfolio-projects-irah.onrender.com/" />
            <Button text="Source Code" href="https://github.com/marceloaraujodev/fipe" />
          </div>
        </div>
        </section>
  )
}
