function Overlay({ isVisible, onOverlayClick, isModal }) {
  return (
    <div
      className={`overlay ${isVisible ? "overlay--visible" : ""} ${
        isModal ? "overlay--fixed" : ""
      }`}
      onClick={onOverlayClick}
    ></div>
  );
}

export default Overlay;
