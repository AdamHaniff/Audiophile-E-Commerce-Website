function SeeProductBtn({ bgColor }) {
  // VARIABLES
  const styles = {
    orange: {
      backgroundColor: "#d87d4a",
      color: "#fff",
    },

    black: {
      backgroundColor: "#000",
      color: "#fff",
    },

    transparent: {
      backgroundColor: "transparent",
      border: "0.1rem solid #000",
      color: "#000",
    },
  };

  return (
    <button className="product-btn" type="button" style={styles[bgColor]}>
      See Product
    </button>
  );
}

export default SeeProductBtn;
