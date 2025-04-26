import { useNavigate } from "react-router-dom";
import CartItem from "../ui/CartItem";

function Cart({ setIsCartOpen }) {
  // VARIABLES
  const navigate = useNavigate();

  // HANDLER FUNCTIONS
  function handleCheckoutClick() {
    navigate("/checkout");
    setIsCartOpen(false);
  }

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
        <button
          className="cart__checkout"
          type="button"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
