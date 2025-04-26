import Quantity from "./Quantity";

function CartItem(isSummary = false) {
  return (
    <li className="cart__item">
      <div className="cart__item-img-name">
        <img
          className="cart__item-img"
          src="/assets/cart/image-xx99-mark-two-headphones.jpg"
          alt="headphones"
        />
        <div className="cart__item-name-price">
          <span className="cart__item-name">XX99 MK II</span>
          <span className="cart__item-price">$ 2,999</span>
        </div>
      </div>
      {!isSummary && <Quantity />}
      {isSummary && <span className="summary__quantity">x1</span>}
    </li>
  );
}

export default CartItem;
