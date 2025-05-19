import { showOverlay } from "../../slices/overlaySlice";
import { useDispatch } from "react-redux";
import CartItem from "../ui/CartItem";
import LabelValue from "../ui/LabelValue";
import ActionButton from "../ui/ActionButton";

function Summary({ setIsModalOpen }) {
  // VARIABLES
  const dispatch = useDispatch();

  // HANDLER FUNCTIONS
  function handleBtnClick() {
    setIsModalOpen(true);
    dispatch(showOverlay("modal"));
  }

  return (
    <section className="summary">
      <h2 className="summary__header">Summary</h2>
      <ul className="summary__items">
        <CartItem isCart={false} />
        <CartItem isCart={false} />
        <CartItem isCart={false} />
      </ul>
      <div className="summary__totals">
        <LabelValue label="Total" value="$ 5,396" />
        <LabelValue label="Shipping" value="$ 50" />
        <LabelValue label="VAT (Included)" value="$ 1,079" />
        <LabelValue label="Grand Total" value="$ 5,446" />
      </div>
      <ActionButton onClick={handleBtnClick}>Continue & Pay</ActionButton>
    </section>
  );
}

export default Summary;
