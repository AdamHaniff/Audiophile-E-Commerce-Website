import Category from "./Category";

function ProductCategories() {
  return (
    <div className="categories">
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </div>
  );
}

export default ProductCategories;
