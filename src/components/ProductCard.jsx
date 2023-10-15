import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card w-96 transform hover:scale-105 transition-transform">
      <Link to={`/product/${product.id}`}>
        <img
          className="h-96 w-96 object-cover"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="p-5 shadow-lg h-48">
          <h2 className="text-1xl font-bold md:text-2xl mb-2">
            {product.title}
          </h2>
          <p className="mb-2">{product.description}</p>
          <p className="font-bold mb-2">{product.price} $</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
