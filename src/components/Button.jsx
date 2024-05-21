export default function Button({ text, href, className }) {
  return (
      <button className="projectBtn">
        <a href={href} target="_blank">{text}</a>
      </button>
  );
}
