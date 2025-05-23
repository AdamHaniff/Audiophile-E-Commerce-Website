function Quantity({ quantity, setQuantity }) {
  // HANDLER FUNCTIONS
  function handleIncrementClick() {
    setQuantity((quantity) => Math.min(10, quantity + 1));
  }

  function handleDecrementClick() {
    setQuantity((quantity) => Math.max(1, quantity - 1));
  }

  return (
    <div className="quantity">
      <span
        className="quantity__decrement-increment"
        onClick={handleDecrementClick}
      >
        -
      </span>
      <span className="quantity__value">{quantity}</span>
      <span
        className="quantity__decrement-increment"
        onClick={handleIncrementClick}
      >
        +
      </span>
    </div>
  );
}

export default Quantity;
