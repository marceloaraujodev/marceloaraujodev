import Button from './Button';
import useIntersectionObserver from './useIntersectionObserver';

export default function CharterBoats() {
  const { 
    blogRefImg, 
    inViewBlogImg,
    blogRefInfo,
    inViewBlogInfo,
    titleRef,
    inViewTitle
  
  } = useIntersectionObserver();

  return (
    <>
    <div className={`project-title ${inViewTitle ? 'animated5' : ''}`}  id='projects' ref={titleRef}>Projects</div>
    <section className={`projects`}>
    <div className='project-image-container'>
      <img
        ref={blogRefImg}
        className={`projects-images ${inViewBlogImg ? 'animated3' : ''} `}
        src={`/charterBoats.png`}
        alt="project image"
      />
    </div>
    <div className={`projects-info ${inViewBlogInfo ? 'animated4' : ''}`} ref={blogRefInfo}>
      <p className="projects-item-title">Charter</p>
      <p className="projects-description">Charter website for Yacht company. Designed with Nextjs, using Fullcalendar, framer motion for css effects and more. This project is still being developed and the client authorized me to used in my portfolio. Database with MongoDB, Login and dashboard features are being implemented</p>
      <div className="projects-langagues">React, Javascript, Nextjs, MongoDB, CSS, HTML</div>
      <div className="btn-container">
        <Button text='Live Code' href="https://charter-ebon.vercel.app/" />
        <Button text="Source Code" href="https://github.com/marceloaraujodev/charter" />
      </div>
    </div>
    </section>  
    </>
  )
}