import Button from './Button';
import useIntersectionObserver from './useIntersectionObserver';

export default function FigmaToCode2() {
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
            src={`/FigmaToCode2.png`}
            alt="project image"
          />
        </div>
        <div
          className={`projects-info ${inViewBlogInfo ? 'animated4' : ''}`}
          ref={blogRefInfo}
        >
          <p className="projects-item-title">Figma Design to Code</p>
          <p className="projects-description">

          Developed an agile e-commerce solution using React.js, Bootstrap, and Vite for rapid development. Transformed Figma designs into seamless, responsive interfaces. Enhanced user interaction with cutting-edge Bootstrap UI components. Demonstrated adeptness in contemporary frontend tech and translating design concepts into robust web apps.
          </p>
          <div className="projects-langagues">
          React, Vite, Javascript, CSS, HTML, Figma
          </div>
          <div className="btn-container">
            <Button text="Live Code" href="https://fitness-sz1r.onrender.com/" />
            <Button
              text="Source Code"
              href="https://github.com/marceloaraujodev/Portfolio-Projects/tree/master/FigmaToCode/Fitness"
            />
          </div>
        </div>
      </section>
    </>
  );
}
