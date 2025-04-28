function InputRadio({ label, paymentMethod, setPaymentMethod }) {
  // HANDLER FUNCTIONS
  function handleOptionChange(e) {
    setPaymentMethod(e.target.value);
  }

  return (
    <label className="input__radio-label">
      <input
        className="input__radio"
        type="radio"
        name="payment-method"
        value={label}
        checked={paymentMethod === label}
        onChange={handleOptionChange}
      />
      <span className="input__radio-custom"></span>
      {label}
    </label>
  );
}

export default InputRadio;
