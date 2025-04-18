import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data";

function ProductDetail() {
  // VARIABLES
  const navigate = useNavigate();
  const { productSlug } = useParams();
  const product = data.find((product) => product.slug === productSlug);

  return (
    <div className="sections-container">
      <button className="detail__back" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default ProductDetail;
