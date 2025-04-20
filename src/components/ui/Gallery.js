function Gallery({ gallery, product }) {
  // VARIABLES
  const images = Object.values(gallery);
  const { name } = product;

  return (
    <section className="gallery">
      {images.map((img, index) => (
        <img className="gallery__img" src={img.mobile} alt={name} key={index} />
      ))}
    </section>
  );
}

export default Gallery;
