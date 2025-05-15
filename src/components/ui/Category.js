import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/helpers";
import { useMenu } from "../../hooks/MenuContext";

function Category({ category }) {
  // STATE
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  // VARIABLES
  const navigate = useNavigate();

  // HANDLER FUNCTIONS
  function handleCategoryClick() {
    if (isMenuOpen) setIsMenuOpen(false);
    navigate(`/${category}`);
    scrollToTop();
  }

  return (
    <div className="category" onClick={handleCategoryClick}>
      <img
        className="category__img"
        src={`/assets/shared/desktop/image-category-thumbnail-${category}-cropped.png`}
        alt="Headphones"
      />
      <div className="category__name-shop-icon">
        <span className="category__name">{category}</span>
        <div className="category__shop-icon">
          <span className="category__shop">Shop</span>
          <svg
            className="category__right-icon"
            width="8"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Category;
