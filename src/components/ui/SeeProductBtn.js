import { useNavigate } from "react-router-dom";

function SeeProductBtn({ bgColor, to }) {
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

  const navigate = useNavigate();

  return (
    <button
      className="product-btn"
      type="button"
      style={styles[bgColor]}
      onClick={() => navigate(to)}
    >
      See Product
    </button>
  );
}

export default SeeProductBtn;
