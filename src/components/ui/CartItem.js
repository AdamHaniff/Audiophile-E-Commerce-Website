import { splitProductName } from "../../helpers/helpers";
import { incrementQuantity, decrementQuantity } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";
import Quantity from "./Quantity";

function CartItem({ isCart = true, item }) {
  // VARIABLES
  const dispatch = useDispatch();
  const { slug, name, price } = item;
  const { firstPart } = splitProductName(name);
  const updatedFirstPart = firstPart.includes("Mark")
    ? firstPart.replace("Mark", "MK")
    : firstPart;

  return (
    <li className="cart__item">
      <div className="cart__item-img-name">
        <img
          className="cart__item-img"
          src={`/assets/cart/image-${slug}.jpg`}
          alt={name}
        />
        <div className="cart__item-name-price">
          <span className="cart__item-name">{updatedFirstPart}</span>
          <span className="cart__item-price">{`$ ${price}`}</span>
        </div>
      </div>
      {isCart && (
        <Quantity
          quantity={item.quantity}
          onIncrement={() => dispatch(incrementQuantity(item.id))}
          onDecrement={() => dispatch(decrementQuantity(item.id))}
        />
      )}
      {!isCart && <span className="summary__quantity">x1</span>}
    </li>
  );
}

export default CartItem;
