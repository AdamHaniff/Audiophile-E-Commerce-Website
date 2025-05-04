function Overlay({ isVisible, isFixed, onOverlayClick }) {
  // HANDLER FUNCTIONS
  function handleOverlayClick() {
    if (isFixed) return;
    onOverlayClick();
  }

  return (
    <div
      className={`overlay ${isVisible ? "overlay--visible" : ""} ${
        isFixed ? "overlay--fixed" : ""
      }`}
      onClick={handleOverlayClick}
    ></div>
  );
}

export default Overlay;
