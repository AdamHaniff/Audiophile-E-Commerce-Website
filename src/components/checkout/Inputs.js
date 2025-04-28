function Inputs({ category, children }) {
  return (
    <div className="inputs">
      <span className="inputs__category">{category}</span>
      <div className="inputs__container">{children}</div>
    </div>
  );
}

export default Inputs;
