import { splitProductName } from "../../helpers/helpers";
import Quantity from "./Quantity";

function CartItem({ isCart = true, item }) {
  console.log(item);
  // VARIABLES
  const { slug, name, price } = item;
  const { firstPart } = splitProductName(name);

  return (
    <li className="cart__item">
      <div className="cart__item-img-name">
        <img
          className="cart__item-img"
          src={`/assets/cart/image-${slug}.jpg`}
          alt={name}
        />
        <div className="cart__item-name-price">
          <span className="cart__item-name">{firstPart}</span>
          <span className="cart__item-price">{`$ ${price}`}</span>
        </div>
      </div>
      {isCart && <Quantity />}
      {!isCart && <span className="summary__quantity">x1</span>}
    </li>
  );
}

export default CartItem;
