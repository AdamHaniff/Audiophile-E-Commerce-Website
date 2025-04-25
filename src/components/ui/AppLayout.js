import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Overlay from "./Overlay";
import { useState } from "react";

function AppLayout() {
  // STATE
  const [isCartOpen, setIsCartOpen] = useState(false);

  // HANDLER FUNCTIONS
  function handleCartClick() {
    setIsCartOpen((open) => !open);
  }

  function handleOverlayClick() {
    setIsCartOpen(false);
  }

  return (
    <div className="app">
      <Header
        isCartOpen={isCartOpen}
        onCartClick={handleCartClick}
        setIsCartOpen={setIsCartOpen}
      />
      <div className="main-footer">
        <main>
          <Outlet />
          <Overlay isVisible={isCartOpen} onOverlayClick={handleOverlayClick} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
