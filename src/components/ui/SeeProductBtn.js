import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/helpers";

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

  // HANDLER FUNCTIONS
  function handleBtnClick() {
    navigate(to);
    scrollToTop();
  }

  return (
    <button
      className="product-btn"
      type="button"
      style={styles[bgColor]}
      onClick={handleBtnClick}
    >
      See Product
    </button>
  );
}

export default SeeProductBtn;
