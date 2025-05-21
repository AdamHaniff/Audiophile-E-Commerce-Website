import { forwardRef } from "react";
import CartFilled from "./CartFilled";
import CartEmpty from "./CartEmpty";

const Cart = forwardRef(({ isVisible, setIsCartOpen, onAnimationEnd }, ref) => {
  // VARIABLES
  const cartClass = `cart ${isVisible ? "cart--visible" : "cart--hidden"}`;
  const isCartFilled = false;

  return (
    <div
      className={cartClass}
      onAnimationEnd={!isVisible ? onAnimationEnd : undefined}
      ref={ref}
    >
      {isCartFilled && <CartFilled setIsCartOpen={setIsCartOpen} />}
      {!isCartFilled && <CartEmpty />}
    </div>
  );
});

export default Cart;
