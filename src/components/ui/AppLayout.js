import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideOverlay } from "../../slices/overlaySlice";
import Header from "./Header";
import Footer from "./Footer";
import Overlay from "./Overlay";

function AppLayout() {
  // STATE
  const [isCartOpen, setIsCartOpen] = useState(false);

  // VARIABLES
  const overlayType = useSelector((state) => state.overlay.type);
  const isVisible = overlayType !== null;
  const isFixed = overlayType === "modal";
  const dispatch = useDispatch();

  // HANDLER FUNCTIONS
  function handleCartClick() {
    setIsCartOpen((open) => !open);
  }

  function handleOverlayClick() {
    setIsCartOpen(false);
    dispatch(hideOverlay());
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
          <Overlay
            isVisible={isVisible}
            isFixed={isFixed}
            onOverlayClick={handleOverlayClick}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
