function Quantity({ quantity, onIncrement, onDecrement }) {
  return (
    <div className="quantity">
      <span className="quantity__decrement-increment" onClick={onDecrement}>
        -
      </span>
      <span className="quantity__value">{quantity}</span>
      <span className="quantity__decrement-increment" onClick={onIncrement}>
        +
      </span>
    </div>
  );
}

export default Quantity;
