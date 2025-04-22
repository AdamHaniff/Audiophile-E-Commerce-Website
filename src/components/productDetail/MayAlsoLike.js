import Recommendation from "./Recommendation";

function MayAlsoLike({ others }) {
  return (
    <section className="recommendations">
      <h2 className="recommendations__header">You May Also Like</h2>
      <div className="recommendations__container">
        {others.map((item) => (
          <Recommendation item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}

export default MayAlsoLike;
