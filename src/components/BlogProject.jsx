import Button from './Button';
import useIntersectionObserver from './useIntersectionObserver';

export default function BlogProject() {
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
    <div >
      <img
        ref={blogRefImg}
        className={`projects-images ${inViewBlogImg ? 'animated3' : ''} `}
        src={`/blog.png`}
        alt="project image"
      />
    </div>
    <div className={`projects-info ${inViewBlogInfo ? 'animated4' : ''}`} ref={blogRefInfo}>
      <p className="projects-item-title">Blog</p>
      <p className="projects-description">A Blog where you can register and edit your post, designed with mongodb using atlas to store the data, the backend was written in node. Everyone can view the posts, but only the creater can edit the post. There is an option to buy the look from the post. Stripe was implemented as the payment method. Im using google cloud to store the images, slow to load images , fleek to host the frontend and render to host the server.</p>
      <div className="projects-langagues">React, Javascript, Nodejs, MongoDB, CSS, HTML</div>
      <div className="btn-container">
        <Button text='Live Code' href="https://summer-lab-1399.on.fleek.co/" />
        <Button text="Source Code" href="https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/Blog" />
      </div>
    </div>
    </section>  
    </>
  )
}
