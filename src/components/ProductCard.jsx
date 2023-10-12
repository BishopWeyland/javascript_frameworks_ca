import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card w-96">
      <Link to={`/product/${product.id}`}>
        <img className="h-96 w-96" src={product.imageUrl} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price} $</p>
      </Link>
    </div>
  );
}

export default ProductCard;
