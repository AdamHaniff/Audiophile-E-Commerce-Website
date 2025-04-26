import InputRadio from "./InputRadio";

function Input({ label, placeholder, isPaymentMethod = false }) {
  return (
    <div className="input">
      <div className="input__label-error">
        <label className="input__label" htmlFor={label}>
          {label}
        </label>
        {/* <span className="input__error">Wrong format</span> */}
      </div>
      {!isPaymentMethod && (
        <input
          className="input__input"
          type="text"
          placeholder={placeholder}
          id={label}
        />
      )}
      {isPaymentMethod && (
        <div className="input__radios">
          <InputRadio label="e-Money" />
          <InputRadio label="Cash on Delivery" />
        </div>
      )}
    </div>
  );
}

export default Input;
