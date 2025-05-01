import { useState } from "react";
import GoBackBtn from "../ui/GoBackBtn";
import CheckoutContainer from "../checkout/CheckoutContainer";
import Summary from "../checkout/Summary";
import Modal from "../modal/Modal";

function Checkout() {
  // STATE
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="sections-container">
      <GoBackBtn />
      <div className="checkout-summary">
        <CheckoutContainer />
        <Summary setIsModalOpen={setIsModalOpen} />
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
}

export default Checkout;
