interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button type="button">
      <span>{text}</span>
    </button>
  );
}

export default Button;
