import { useNavigate } from "react-router-dom";
import { clearCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";
import CartItem from "../ui/CartItem";
import LabelValue from "../ui/LabelValue";
import ActionButton from "../ui/ActionButton";

function CartFilled({ setIsCartOpen, cartItems }) {
  // VARIABLES
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalCartPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toLocaleString();

  // HANDLER FUNCTIONS
  function handleCheckoutClick() {
    navigate("/checkout");
    setIsCartOpen(false);
  }

  return (
    <div className="cart__filled">
      <div className="cart__header-remove">
        <span className="cart__header">Cart ({totalCartQuantity})</span>
        <button
          className="cart__remove"
          type="button"
          onClick={() => dispatch(clearCart())}
        >
          Remove all
        </button>
      </div>
      <ul className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="cart__total-checkout">
        <LabelValue label="Total" value={`$ ${totalCartPrice}`} />
        <ActionButton onClick={handleCheckoutClick}>Checkout</ActionButton>
      </div>
    </div>
  );
}

export default CartFilled;
