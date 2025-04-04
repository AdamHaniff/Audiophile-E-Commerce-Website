import Header from "./Header";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
      </main>
    </div>
  );
}

export default App;
