function Input({ label, placeholder }) {
  return (
    <div className="input">
      <div className="input__label-error">
        <label className="input__label" htmlFor={label}>
          {label}
        </label>
        {/* <span className="input__error">Wrong format</span> */}
      </div>
      <input
        className="input__input"
        type="text"
        placeholder={placeholder}
        id={label}
      />
    </div>
  );
}

export default Input;
