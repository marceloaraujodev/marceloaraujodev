import Button from './Button';
import useIntersectionObserver from './useIntersectionObserver';

export default function FigmaToCode() {
  const {
    blogRefImg,
    inViewBlogImg,
    blogRefInfo,
    inViewBlogInfo,

  } = useIntersectionObserver();
  return (
    <>
      <section className={`projects`}>
        <div className="project-image-container">
          <img
            ref={blogRefImg}
            className={`projects-images ${inViewBlogImg ? 'animated3' : ''} `}
            src={`/FigmaToCode.png`}
            alt="project image"
          />
        </div>
        <div
          className={`projects-info ${inViewBlogInfo ? 'animated4' : ''}`}
          ref={blogRefInfo}
        >
          <p className="projects-item-title">Figma Design to Code</p>
          <p className="projects-description">
            Crafted a dynamic e-commerce platform leveraging React.js,
            Bootstrap, and Vite for swift development. Seamlessly translated
            Figma designs into responsive and interactive user interfaces.
            Integrated state-of-the-art UI components from Bootstrap to enhance
            user experience. The project showcases my proficiency in modern
            frontend technologies and my ability to transform design concepts
            into functional web applications.
          </p>
          <div className="projects-langagues">
          React, Vite, Javascript, CSS, HTML, Figma
          </div>
          <div className="btn-container">
            <Button text="Live Code" href="https://figmatocodeecho.onrender.com" />
            <Button
              text="Source Code"
              href="https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/FigmaToCode/EcoDental"
            />
          </div>
        </div>
      </section>
    </>
  );
}
