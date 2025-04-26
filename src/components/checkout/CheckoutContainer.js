import Inputs from "./Inputs";
import InputsRow from "./InputsRow";
import Input from "./Input";

function CheckoutContainer() {
  // VARIABLES
  const isEMoney = true;

  return (
    <section className="checkout">
      <h2 className="checkout__header">Checkout</h2>
      <form className="checkout__form">
        <Inputs category="Billing Details">
          <InputsRow>
            <Input label="Name" placeholder="Alexei Ward" />
            <Input label="Email Address" placeholder="alexeiward@mail.com" />
          </InputsRow>
          <Input label="Phone Number" placeholder="+1 202-555-0136" />
        </Inputs>

        <Inputs category="Shipping Info">
          <Input label="Your Address" placeholder="1137 Williams Avenue" />
          <InputsRow>
            <Input label="ZIP Code" placeholder="10001" />
            <Input label="City" placeholder="New York" />
          </InputsRow>
          <Input label="Country" placeholder="United States" />
        </Inputs>

        <Inputs category="Payment Details">
          <Input label="Payment Method" isPaymentMethod={true} />
          {isEMoney && (
            <InputsRow>
              <Input label="e-Money Number" placeholder="238521993" />
              <Input label="e-Money Pin" placeholder="6891" />
            </InputsRow>
          )}
          {!isEMoney && (
            <div className="on-delivery__icon-text">
              <img
                className="on-delivery__icon"
                src="/assets/checkout/icon-cash-on-delivery.svg"
                alt="Cash on delivery"
              />
              <p className="on-delivery__text">
                The 'Cash on Delivery' option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </Inputs>
      </form>
    </section>
  );
}

export default CheckoutContainer;
