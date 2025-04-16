import Category from "./Category";

function ProductCategories() {
  return (
    <section className="categories">
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </section>
  );
}

export default ProductCategories;
