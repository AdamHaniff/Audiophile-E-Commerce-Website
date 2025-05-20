import { forwardRef } from "react";
import Category from "../ui/Category";

const Menu = forwardRef(({ isVisible, onAnimationEnd }, ref) => {
  // VARIABLES
  const menuClass = `menu ${isVisible ? "menu--visible" : "menu--hidden"}`;

  return (
    <div
      className={menuClass}
      onAnimationEnd={!isVisible ? onAnimationEnd : undefined}
      ref={ref}
    >
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </div>
  );
});

export default Menu;
