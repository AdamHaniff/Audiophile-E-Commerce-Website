import SeeProductBtn from "./SeeProductBtn";
import { splitProductName } from "../../helpers/helpers";

function ProductPreview({ product }) {
  // VARIABLES
  const {
    categoryImage,
    description,
    name,
    new: isNew,
    category,
    slug,
  } = product;

  const { firstPart, lastWord } = splitProductName(name);

  return (
    <div className="preview">
      <img className="preview__img" src={categoryImage.mobile} alt={name} />
      <div className="preview__info">
        {isNew && <span className="preview__new">New Product</span>}
        <span className="preview__name">
          {firstPart} <br /> {lastWord}
        </span>
        <p className="preview__description">{description}</p>
        <SeeProductBtn bgColor="orange" to={`/${category}/${slug}`} />
      </div>
    </div>
  );
}

export default ProductPreview;
