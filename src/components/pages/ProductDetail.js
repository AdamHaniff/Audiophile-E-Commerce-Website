import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data";
import ProductPreview from "../ui/ProductPreview";

function ProductDetail() {
  // VARIABLES
  const navigate = useNavigate();
  const { productSlug } = useParams();
  const product = data.find((product) => product.slug === productSlug);

  return (
    <div className="sections-container">
      <button
        className="detail__back"
        onClick={() => navigate(-1)}
        type="button"
      >
        Go Back
      </button>
      <ProductPreview product={product} isProductDetail={true} />
    </div>
  );
}

export default ProductDetail;
