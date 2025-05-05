import Category from "../ui/Category";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={`menu ${isMenuOpen ? "menu--visible" : ""}`}>
      <Category
        category="headphones"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Category
        category="speakers"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Category
        category="earphones"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}

export default Menu;
