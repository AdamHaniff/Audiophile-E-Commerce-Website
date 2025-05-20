import { useNavigate } from "react-router-dom";
import CartItem from "../ui/CartItem";
import LabelValue from "../ui/LabelValue";
import ActionButton from "../ui/ActionButton";
import { forwardRef } from "react";

const Cart = forwardRef(({ isVisible, setIsCartOpen, onAnimationEnd }, ref) => {
  // VARIABLES
  const navigate = useNavigate();
  const cartClass = `cart ${isVisible ? "cart--visible" : "cart--hidden"}`;

  // HANDLER FUNCTIONS
  function handleCheckoutClick() {
    navigate("/checkout");
    setIsCartOpen(false);
  }

  return (
    <div
      className={cartClass}
      onAnimationEnd={!isVisible ? onAnimationEnd : undefined}
      ref={ref}
    >
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
        <ActionButton onClick={handleCheckoutClick}>Checkout</ActionButton>
      </div>
    </div>
  );
});

export default Cart;
