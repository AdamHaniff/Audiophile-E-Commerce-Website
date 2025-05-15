import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideOverlay } from "../../slices/overlaySlice";
import { useMenu } from "../../hooks/MenuContext";
import Header from "./Header";
import Footer from "./Footer";
import Overlay from "./Overlay";

function AppLayout() {
  // STATE
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useMenu();

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
    if (isFixed) return;
    if (isCartOpen) setIsCartOpen(false);
    if (isMenuOpen) setIsMenuOpen(false);
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
