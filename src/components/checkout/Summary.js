import CartItem from "../ui/CartItem";
import LabelValue from "../ui/LabelValue";

function Summary({ setIsModalOpen }) {
  return (
    <section className="summary">
      <h2 className="summary__header">Summary</h2>
      <ul className="summary__items">
        <CartItem isSummary={true} />
        <CartItem isSummary={true} />
        <CartItem isSummary={true} />
      </ul>
      <div className="summary__totals">
        <LabelValue label="Total" value="$ 5,396" />
        <LabelValue label="Shipping" value="$ 50" />
        <LabelValue label="VAT (Included)" value="$ 1,079" />
        <LabelValue label="Grand Total" value="$ 5,446" />
      </div>
      <button
        className="summary__btn"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Continue & Pay
      </button>
    </section>
  );
}

export default Summary;
