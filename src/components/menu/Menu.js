import Category from "../ui/Category";

function Menu({ isVisible, onAnimationEnd }) {
  // VARIABLES
  const menuClass = `menu ${isVisible ? "menu--visible" : "menu--hiding"}`;

  return (
    <div
      className={menuClass}
      onAnimationEnd={!isVisible ? onAnimationEnd : undefined}
    >
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </div>
  );
}

export default Menu;
