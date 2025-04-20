import SeeProductBtn from "./SeeProductBtn";

function Recommendation({ product }) {
  // VARIABLES
  const { image, name, slug } = product;

  return (
    <div className="recommendation">
      <img className="recommendation__img" src={image.mobile} alt={name} />
      <span className="recommendation__name">{name}</span>
      {/* <SeeProductBtn bgColor="orange" to="" /> */}
    </div>
  );
}

export default Recommendation;
