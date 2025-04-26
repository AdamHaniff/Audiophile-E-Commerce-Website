function Inputs({ category, children }) {
  return (
    <div className="inputs">
      <span className="inputs__category">{category}</span>
      {children}
    </div>
  );
}

export default Inputs;
