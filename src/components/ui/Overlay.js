function Overlay({ isVisible, isFixed, onOverlayClick }) {
  return (
    <div
      className={`overlay ${isVisible ? "overlay--visible" : ""} ${
        isFixed ? "overlay--fixed" : ""
      }`}
      onClick={onOverlayClick}
    ></div>
  );
}

export default Overlay;
