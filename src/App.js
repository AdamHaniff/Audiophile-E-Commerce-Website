import Header from "./components/shared/Header";
import Home from "./components/pages/Home";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
