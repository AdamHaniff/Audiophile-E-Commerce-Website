import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showOverlay, hideOverlay } from "../../slices/overlaySlice";
import { useEffect, useRef, useState } from "react";
import { useMenu } from "../../hooks/MenuContext";
import Logo from "./Logo";
import Cart from "../cart/Cart";
import Menu from "../menu/Menu";

function Header({ isCartOpen, onCartClick, setIsCartOpen }) {
  // STATE
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const [isMenuAnimatingOut, setIsMenuAnimatingOut] = useState(false);
  const [isCartAnimatingOut, setIsCartAnimatingOut] = useState(false);

  // VARIABLES
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const isCartEmpty = cartItems.length === 0;

  // REFS
  const hasMenuMounted = useRef(false);
  const hasCartMounted = useRef(false);
  const isFirstRender = useRef(true);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  // EFFECTS
  useEffect(() => {
    // Show/hide overlay if cart or menu is opened/closed
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isCartOpen || isMenuOpen) {
      dispatch(showOverlay("cart/menu"));
    } else {
      dispatch(hideOverlay());
    }
  }, [isCartOpen, isMenuOpen, dispatch]);

  useEffect(() => {
    // Display Menu slide-up animation when Menu is closing
    if (hasMenuMounted.current) {
      if (!isMenuOpen) {
        setIsMenuAnimatingOut(true);
      }
    } else {
      hasMenuMounted.current = true;
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Display Cart fade-out animation when Cart is closing
    if (hasCartMounted.current) {
      if (!isCartOpen) {
        setIsCartAnimatingOut(true);
      }
    } else {
      hasCartMounted.current = true;
    }
  }, [isCartOpen]);

  useEffect(() => {
    // Hide the Menu if the user clicks outside of it
    if (!isMenuOpen) return;

    function handleOutsideClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen, setIsMenuOpen]);

  useEffect(() => {
    // Hide the Cart if the user clicks outside of it
    if (!isCartOpen) return;

    function handleOutsideClick(e) {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target) &&
        cartIconRef.current &&
        !cartIconRef.current.contains(e.target)
      ) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isCartOpen, setIsCartOpen]);

  return (
    <header
      className={`header ${
        isHomepage ? "header--rangoon-green" : "header--black"
      }`}
    >
      <button
        className="header__hamburger-container"
        ref={hamburgerRef}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <svg
          className="header__hamburger"
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      </button>
      <Logo />
      <button
        className="header__cart-container"
        ref={cartIconRef}
        onClick={onCartClick}
      >
        <svg
          className="header__cart"
          width="23"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
        {!isCartEmpty && (
          <span className="header__cart-badge">{totalCartQuantity}</span>
        )}
      </button>

      {(isCartOpen || isCartAnimatingOut) && (
        <Cart
          isVisible={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          onAnimationEnd={() => setIsCartAnimatingOut(false)}
          ref={cartRef}
        />
      )}
      {(isMenuOpen || isMenuAnimatingOut) && (
        <Menu
          isVisible={isMenuOpen}
          onAnimationEnd={() => setIsMenuAnimatingOut(false)}
          ref={menuRef}
        />
      )}
    </header>
  );
}

export default Header;
