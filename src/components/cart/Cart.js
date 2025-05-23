import { forwardRef } from "react";
import { useSelector } from "react-redux";
import CartFilled from "./CartFilled";
import CartEmpty from "./CartEmpty";

const Cart = forwardRef(({ isVisible, setIsCartOpen, onAnimationEnd }, ref) => {
  // VARIABLES
  const cartClass = `cart ${isVisible ? "cart--visible" : "cart--hidden"}`;
  const cartItems = useSelector((state) => state.cart);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div
      className={cartClass}
      onAnimationEnd={!isVisible ? onAnimationEnd : undefined}
      ref={ref}
    >
      {isCartEmpty && <CartEmpty />}
      {!isCartEmpty && (
        <CartFilled setIsCartOpen={setIsCartOpen} cartItems={cartItems} />
      )}
    </div>
  );
});

export default Cart;
