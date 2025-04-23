import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__header-remove">
        <span className="cart__header">Cart (3)</span>
        <button className="cart__remove" type="button">
          Remove all
        </button>
      </div>
      <ul className="cart__items">
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <div className="cart__total-checkout">
        <div className="cart__total-price">
          <span className="cart__total-text">Total</span>
          <span className="cart__price">$ 5,396</span>
        </div>
        <button className="cart__checkout" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
