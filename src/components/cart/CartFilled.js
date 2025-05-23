import { useNavigate } from "react-router-dom";
import CartItem from "../ui/CartItem";
import LabelValue from "../ui/LabelValue";
import ActionButton from "../ui/ActionButton";

function CartFilled({ setIsCartOpen, cartItems }) {
  // VARIABLES
  const navigate = useNavigate();

  // HANDLER FUNCTIONS
  function handleCheckoutClick() {
    navigate("/checkout");
    setIsCartOpen(false);
  }

  return (
    <div className="cart__filled">
      <div className="cart__header-remove">
        <span className="cart__header">Cart (3)</span>
        <button className="cart__remove" type="button">
          Remove all
        </button>
      </div>
      <ul className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="cart__total-checkout">
        <LabelValue label="Total" value="$ 5,396" />
        <ActionButton onClick={handleCheckoutClick}>Checkout</ActionButton>
      </div>
    </div>
  );
}

export default CartFilled;
