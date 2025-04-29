function LabelValue({ label, value }) {
  return (
    <div className="label-value">
      <span className="label-value__label">{label}</span>
      <span className="label-value__value">{value}</span>
    </div>
  );
}

export default LabelValue;
