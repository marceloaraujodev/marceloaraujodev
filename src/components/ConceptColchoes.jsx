import Button from './Button';
import useIntersectionObserver from './useIntersectionObserver';

export default function ConceptColchoes() {
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
            src={`/concept.jpg`}
            alt="project image"
          />
        </div>
        <div
          className={`projects-info ${inViewBlogInfo ? 'animated4' : ''}`}
          ref={blogRefInfo}
        >
          <p className="projects-item-title">Concept Colchões Landing Page</p>
          <p className="projects-description">
          Engineered a captivating landing page utilizing React.js, Bootstrap, and custom CSS. Transformed the clients design wishes into code.
          </p>
          <div className="projects-langagues">
          React, bootstrap CSS, HTML
          </div>
          <div className="btn-container">
            <Button text="Live Code" href="https://www.colchoesconceptbrusque.com.br/" />
            <Button
              text="Source Code"
              href="https://github.com/marceloaraujodev/ConceptColchoes"
            />
          </div>
        </div>
      </section>
    </>
  )
}

