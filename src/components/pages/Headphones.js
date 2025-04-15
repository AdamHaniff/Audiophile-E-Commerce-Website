import data from "../../data/data";
import ProductPreview from "../ui/ProductPreview";

function Headphones() {
  // VARIABLES
  const headphones = data.filter((el) => el.category === "headphones");
  const sorted = headphones.sort((a, b) => b.id - a.id);

  console.log(sorted);

  return (
    <div className="products">
      <h2 className="products__header">Headphones</h2>
      <div className="sections-container">
        <section className="previews">
          {sorted.map((product) => (
            <ProductPreview product={product} key={product.id} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Headphones;
