// eslint-disable-next-line react/prop-types
import Button from './Button';

export default function Projects({ image, itemTitle, description, langagues, href, text, text2, href2 }) {
  return (
    <>
    
      <section className="projects">
        <div>
          <img
            className="projects-images"
            src={`/${image}`}
            alt="project image"
          />
        </div>
        <div className="projects-info">
          <p className="projects-item-title">{itemTitle}</p>
          <p className="projects-description">{description}</p>
          <div className="projects-langagues">{langagues}</div>
          <div className="btn-container">
            <Button text={text} href={href} />
            <Button text={text2} href={href2} />
          </div>
        </div>
      </section>
    </>
  );
}
