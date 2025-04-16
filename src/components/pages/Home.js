import FeaturedProducts from "../home/FeaturedProducts";
import Hero from "../home/Hero";
import AboutAudiophile from "../ui/AboutAudiophile";
import ProductCategories from "../ui/ProductCategories";

function Home() {
  return (
    <div>
      <Hero />
      <div className="sections-container">
        <ProductCategories />
        <FeaturedProducts />
        <AboutAudiophile />
      </div>
    </div>
  );
}

export default Home;
