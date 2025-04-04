function Category({ category }) {
  return (
    <div className="category">
      <img
        className="category__img"
        src={`assets/shared/desktop/image-category-thumbnail-${category}.png`}
        alt="Headphones"
      />
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
  );
}

export default Category;
