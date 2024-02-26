export default function Button({ text, href }) {
  return (
      <button className="projectBtn">
        <a href={href} target="_blank">{text}</a>
      </button>
  );
}
