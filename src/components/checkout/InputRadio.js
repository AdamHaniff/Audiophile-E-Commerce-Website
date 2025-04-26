function InputRadio({ label }) {
  return (
    <label className="input__radio-label">
      <input className="input__radio" type="radio" name="payment-method" />
      <span className="input__radio-custom"></span>
      {label}
    </label>
  );
}

export default InputRadio;
