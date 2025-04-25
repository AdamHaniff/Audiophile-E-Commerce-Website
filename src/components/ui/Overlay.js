function Overlay({ isVisible, onOverlayClick }) {
  return (
    <div
      className={`overlay ${isVisible ? "overlay--visible" : ""}`}
      onClick={onOverlayClick}
    ></div>
  );
}

export default Overlay;
