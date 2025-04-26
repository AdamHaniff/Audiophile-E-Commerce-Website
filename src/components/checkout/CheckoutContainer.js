import Inputs from "./Inputs";
import InputsRow from "./InputsRow";
import Input from "./Input";

function CheckoutContainer() {
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
      </form>
    </section>
  );
}

export default CheckoutContainer;
