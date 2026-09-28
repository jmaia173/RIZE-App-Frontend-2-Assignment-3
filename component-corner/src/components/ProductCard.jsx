import "./ProductCard.css";

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
}

export default ProductCard;