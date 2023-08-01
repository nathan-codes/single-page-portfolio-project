import "./Button.css";

function Button({ text, url }) {
  return (
    <a href={url} target="_blank"  className="Button">
      {text}
    </a>
  );
}

export default Button;
