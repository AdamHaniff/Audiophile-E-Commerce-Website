import data from "../../data/data";
import ProductPreview from "../ui/ProductPreview";
import ProductCategories from "../ui/ProductCategories";
import AboutAudiophile from "../ui/AboutAudiophile";

function CategoryPreviews({ category }) {
  // VARIABLES
  const products = data.filter((el) => el.category === category);
  const sorted = products.sort((a, b) => b.id - a.id);

  return (
    <div className="products">
      <h2 className="products__header">{category}</h2>
      <div className="sections-container">
        <section className="previews">
          {sorted.map((product) => (
            <ProductPreview product={product} key={product.id} />
          ))}
        </section>
        <ProductCategories />
        <AboutAudiophile />
      </div>
    </div>
  );
}

export default CategoryPreviews;
