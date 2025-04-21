import SeeProductBtn from "../ui/SeeProductBtn";
import data from "../../data/data";

function Recommendation({ item }) {
  // VARIABLES
  const { image, name, slug } = item;
  const product = data.find((product) => product.slug === slug);
  const { category } = product;

  return (
    <div className="recommendation">
      <img className="recommendation__img" src={image.mobile} alt={name} />
      <span className="recommendation__name">{name}</span>
      <SeeProductBtn bgColor="orange" to={`/${category}/${slug}`} />
    </div>
  );
}

export default Recommendation;
