import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideOverlay } from "../../slices/overlaySlice";
import { scrollToTop } from "../../helpers/helpers";
import CartItem from "../ui/CartItem";
import LabelValue from "../ui/LabelValue";
import ActionButton from "../ui/ActionButton";

function Modal({ setIsModalOpen }) {
  // STATE
  const [isExpanded, setIsExpanded] = useState(false);

  // VARIABLES
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // HANDLER FUNCTIONS
  function handleModalViewClick() {
    setIsExpanded((expanded) => !expanded);
  }

  function handleModalBtnClick() {
    // Hide the modal and overlay
    setIsModalOpen(false);
    dispatch(hideOverlay());

    // Navigate back to the top of the homepage
    navigate("/");
    scrollToTop();

    // WRITE CODE TO EMPTY CART HERE
  }

  return (
    <div className="modal">
      <img
        className="modal__confirmation-icon"
        src="/assets/checkout/icon-order-confirmation.svg"
        alt="Order confirmation"
      />
      <div className="modal__header-subtext">
        <h2 className="modal__header">
          Thank You
          <br />
          For Your Order
        </h2>
        <span className="modal__subtext">
          You will receive an email confirmation shortly.
        </span>
      </div>
      <div className="modal__items-total">
        <div className="modal__items">
          <div className="modal__items-container">
            <CartItem isCart={false} />
            {isExpanded && (
              <>
                <CartItem isCart={false} />
                <CartItem isCart={false} />
              </>
            )}
          </div>
          <div className="modal__items-divider"></div>
          <span className="modal__items-view" onClick={handleModalViewClick}>
            {isExpanded ? "View Less" : "and 2 other item(s)"}
          </span>
        </div>
        <div className="modal__total">
          <LabelValue label="Grand Total" value="$ 5,446" />
        </div>
      </div>
      <ActionButton onClick={handleModalBtnClick}>Back To Home</ActionButton>
    </div>
  );
}

export default Modal;
