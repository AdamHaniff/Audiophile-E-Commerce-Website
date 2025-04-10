import SeeProductBtn from "../ui/SeeProductBtn";

function FeaturedProducts() {
  return (
    <section className="featured">
      <div className="featured__product">
        <img
          className="featured__circles"
          src="assets/home/desktop/pattern-circles.svg"
          alt="Pattern circles"
        />
        <img
          className="featured__product-img"
          src="assets/home/mobile/image-speaker-zx9.png"
          alt="ZX9 Speaker"
        />
        <div className="featured__name-about-btn">
          <span className="featured__product-name">
            ZX9 <br />
            Speaker
          </span>
          <span className="featured__product-about">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </span>
          <SeeProductBtn bgColor="black" />
        </div>
      </div>

      <div className="featured__product">
        <div className="featured__name-btn">
          <span className="featured__product-name">ZX7 Speaker</span>
          <SeeProductBtn />
        </div>
      </div>

      <div className="featured__img-name">
        <img
          className="featured__product-img"
          src="assets/home/mobile/image-earphones-yx1.jpg"
          alt="YX1 Earphones"
        />
        <div className="featured__name-btn">
          <span className="featured__product-name">YX1 Earphones</span>
          <SeeProductBtn />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
