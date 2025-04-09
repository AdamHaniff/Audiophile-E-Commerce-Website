import FeaturedProducts from "../home/FeaturedProducts";
import Hero from "../home/Hero";
import AboutAudiophile from "../shared/AboutAudiophile";
import ProductCategories from "../shared/ProductCategories";

function Home() {
  return (
    <div>
      <Hero />
      <div className="categories-featured-about">
        <ProductCategories />
        <FeaturedProducts />
        <AboutAudiophile />
      </div>
    </div>
  );
}

export default Home;
