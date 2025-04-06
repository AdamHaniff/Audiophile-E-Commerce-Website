import Header from "./Header";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";
import FeaturedProducts from "./FeaturedProducts";
import AboutAudiophileFooter from "./AboutAudiophileFooter";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <AboutAudiophileFooter />
      </main>
    </div>
  );
}

export default App;
