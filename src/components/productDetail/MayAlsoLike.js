import Recommendation from "./Recommendation";

function MayAlsoLike({ others }) {
  return (
    <section className="recommendations">
      <h2 className="recommendations__header">You May Also Like</h2>
      {others.map((item) => (
        <Recommendation item={item} key={item.name} />
      ))}
    </section>
  );
}

export default MayAlsoLike;
