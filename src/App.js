import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./components/pages/Home";
import Headphones from "./components/pages/Headphones";
import ProductDetail from "./components/pages/ProductDetail";
import Speakers from "./components/pages/Speakers";
import Earphones from "./components/pages/Earphones";
import Checkout from "./components/pages/Checkout";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="headphones">
            <Route index element={<Headphones />} />
            <Route path=":productSlug" element={<ProductDetail />} />
          </Route>
          <Route path="speakers">
            <Route index element={<Speakers />} />
            <Route path=":productSlug" element={<ProductDetail />} />
          </Route>
          <Route path="earphones">
            <Route index element={<Earphones />} />
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
