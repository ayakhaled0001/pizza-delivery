function Button({ disabled, children }) {
  return (
    <button disabled={disabled} className="">
      {children}
    </button>
  );
}

export default Button;
