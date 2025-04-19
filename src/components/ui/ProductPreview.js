import SeeProductBtn from "./SeeProductBtn";
import { splitProductName } from "../../helpers/helpers";

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
        <SeeProductBtn bgColor="orange" to={`/${category}/${slug}`} />
        {/* UP TO THIS CODE */}
        <div className="detail__price-quantity-cart">
          <span className="detail__price">$ {price}</span>
          <div className="detail__quantity-cart">
            <div className="detail__quantity-container">
              <span className="detail__decrement-increment">-</span>
              <span className="detail__quantity">1</span>
              <span className="detail__decrement-increment">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
