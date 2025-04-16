import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./components/pages/Home";
import CategoryPreviews from "./components/pages/CategoryPreviews";
import ProductDetail from "./components/pages/ProductDetail";
import Checkout from "./components/pages/Checkout";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="headphones">
            <Route index element={<CategoryPreviews category="headphones" />} />
            <Route path=":productSlug" element={<ProductDetail />} />
          </Route>
          <Route path="speakers">
            <Route index element={<CategoryPreviews category="speakers" />} />
            <Route path=":productSlug" element={<ProductDetail />} />
          </Route>
          <Route path="earphones">
            <Route index element={<CategoryPreviews category="earphones" />} />
            <Route path=":productSlug" element={<ProductDetail />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
