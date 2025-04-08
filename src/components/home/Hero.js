import SeeProductBtn from "../ui/SeeProductBtn";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src="assets/home/mobile/image-header.jpg"
        alt="XX99 Mark II Headphones"
      />
      <div className="hero__content">
        <span className="hero__new">New Product</span>
        <span className="hero__product">
          XX99 Mark II <br />
          Headphones
        </span>
        <span className="hero__about">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </span>
        <SeeProductBtn />
      </div>
    </section>
  );
}

export default Hero;
