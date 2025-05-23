import { splitProductName } from "../../helpers/helpers";
import { useState } from "react";
import { addItemToCart } from "../../slices/cartSlice.js";
import { useDispatch } from "react-redux";
import Quantity from "./Quantity";
import SeeProductBtn from "./SeeProductBtn";

function ProductPreview({ product, isProductDetail = false }) {
  // STATE
  const [quantity, setQuantity] = useState(1);

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

  const formattedPrice = price.toLocaleString();
  const { firstPart, lastWord } = splitProductName(name);
  const dispatch = useDispatch();

  // HANDLER FUNCTIONS
  function handleAddToCart() {
    dispatch(addItemToCart({ ...product, quantity }));
  }

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
            <span className="detail__price">$ {formattedPrice}</span>
            <div className="detail__quantity-cart">
              <Quantity quantity={quantity} setQuantity={setQuantity} />
              <button
                className="detail__cart"
                type="button"
                onClick={handleAddToCart}
              >
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
