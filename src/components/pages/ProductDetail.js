import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data";
import ProductPreview from "../ui/ProductPreview";
import Features from "../ui/Features";
import InTheBox from "../ui/InTheBox";
import Gallery from "../ui/Gallery";
import MayAlsoLike from "../ui/MayAlsoLike";

function ProductDetail() {
  // VARIABLES
  const navigate = useNavigate();
  const { productSlug } = useParams();
  const product = data.find((product) => product.slug === productSlug);
  const { features, includes, gallery, others } = product;

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
      <div className="detail__features-box">
        <Features features={features} />
        <InTheBox includes={includes} />
      </div>
      <Gallery gallery={gallery} product={product} />
      <MayAlsoLike others={others} />
    </div>
  );
}

export default ProductDetail;
