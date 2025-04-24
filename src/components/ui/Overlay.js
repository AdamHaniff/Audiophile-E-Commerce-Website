function Overlay({ isVisible }) {
  return (
    <div className={`overlay ${isVisible ? "overlay--visible" : ""}`}></div>
  );
}

export default Overlay;
