function InTheBox({ includes }) {
  return (
    <section className="box">
      <h2 className="box__header">In The Box</h2>
      <ul className="box__includes">
        {includes.map((item) => (
          <li className="box__quantity-item" key={item.item}>
            <span className="box__quantity">{item.quantity}x</span>
            <span className="box__item">{item.item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InTheBox;
