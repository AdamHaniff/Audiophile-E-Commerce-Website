function ActionButton({ onClick, children }) {
  return (
    <button className="action-btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default ActionButton;
