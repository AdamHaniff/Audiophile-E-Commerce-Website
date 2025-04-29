import { useNavigate } from "react-router-dom";
import CartItem from "../ui/CartItem";
import LabelValue from "../ui/LabelValue";

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
        <LabelValue label="Total" value="$ 5,396" />
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
