import GoBackBtn from "../ui/GoBackBtn";
import CheckoutContainer from "../checkout/CheckoutContainer";
import Summary from "../checkout/Summary";

function Checkout() {
  return (
    <div className="sections-container">
      <GoBackBtn />
      <div className="checkout-summary">
        <CheckoutContainer />
        <Summary />
      </div>
    </div>
  );
}

export default Checkout;
