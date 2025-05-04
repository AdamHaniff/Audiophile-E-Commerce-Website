import Category from "../ui/Category";

function Menu() {
  return (
    <div className="menu">
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </div>
  );
}

export default Menu;
