import { useParams } from "react-router-dom";
import data from "../../data/data";
import ProductPreview from "../ui/ProductPreview";
import Features from "../productDetail/Features";
import InTheBox from "../productDetail/InTheBox";
import Gallery from "../productDetail/Gallery";
import MayAlsoLike from "../productDetail/MayAlsoLike";
import ProductCategories from "../ui/ProductCategories";
import AboutAudiophile from "../ui/AboutAudiophile";
import GoBackBtn from "../ui/GoBackBtn";

function ProductDetail() {
  // VARIABLES
  const { productSlug } = useParams();
  const product = data.find((product) => product.slug === productSlug);
  const { features, includes, gallery, others } = product;

  return (
    <div className="sections-container">
      <GoBackBtn />
      <ProductPreview
        product={product}
        isProductDetail={true}
        key={product.name}
      />
      <div className="detail__features-box">
        <Features features={features} />
        <InTheBox includes={includes} />
      </div>
      <Gallery gallery={gallery} product={product} />
      <MayAlsoLike others={others} />
      <ProductCategories />
      <AboutAudiophile />
    </div>
  );
}

export default ProductDetail;
