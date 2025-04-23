import Quantity from "../ui/Quantity";

function CartItem() {
  return (
    <li className="cart__item">
      <img
        className="cart__item-img"
        src="/assets/cart/image-xx99-mark-two-headphones.jpg"
        alt="headphones"
      />
      <div className="cart__item-name-price">
        <span className="cart__item-name">XX99 MK II</span>
        <span className="cart__item-price">$ 2,999</span>
      </div>
      <Quantity />
    </li>
  );
}

export default CartItem;
