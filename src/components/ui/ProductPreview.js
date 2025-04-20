import SeeProductBtn from "./SeeProductBtn";
import { splitProductName } from "../../helpers/helpers";
import Quantity from "./Quantity";

function ProductPreview({ product, isProductDetail = false }) {
  // VARIABLES
  const {
    categoryImage,
    description,
    name,
    new: isNew,
    category,
    slug,
    price,
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
        {isProductDetail ? (
          <div className="detail__price-quantity-cart">
            <span className="detail__price">$ {price}</span>
            <div className="detail__quantity-cart">
              <Quantity />
              <button className="detail__cart" type="button">
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <SeeProductBtn bgColor="orange" to={`/${category}/${slug}`} />
        )}
      </div>
    </div>
  );
}

export default ProductPreview;
