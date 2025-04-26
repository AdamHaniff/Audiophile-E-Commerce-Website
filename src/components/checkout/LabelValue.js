function LabelValue({ label, value }) {
  return (
    <div>
      <span className="summary__label">{label}</span>
      <span className="summary__value">{value}</span>
    </div>
  );
}

export default LabelValue;
