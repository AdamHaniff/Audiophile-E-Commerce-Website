function Modal() {
  return (
    <div>
      <img
        className="modal__confirmation-icon"
        src="/assets/checkout/icon-order-confirmation.svg"
        alt="Order confirmation"
      />
      <div className="modal__header-subtext">
        <h2 className="modal__header">Thank You For Your Order</h2>
        <span className="modal__subtext">
          You will receive an email confirmation shortly
        </span>
      </div>
      <div className="modal__items-total">
        <div className="modal__items"></div>
        <div className="modal__total"></div>
      </div>
      <button className="modal__btn" type="button">
        Back To Home
      </button>
    </div>
  );
}

export default Modal;
