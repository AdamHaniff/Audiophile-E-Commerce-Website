import GoBackBtn from "../ui/GoBackBtn";
import CheckoutContainer from "../checkout/CheckoutContainer";
import Summary from "../checkout/Summary";

function Checkout() {
  return (
    <div className="sections-container">
      <GoBackBtn />
      <CheckoutContainer />
      <Summary />
    </div>
  );
}

export default Checkout;
