import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import StarRating from "../components/StarRating";

function Product() {
  const { dispatch } = useCart();

  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `https://api.noroff.dev/api/v1/online-shop/${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  const handleAddToCart = () => {
    if (productData) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: productData.id,
          title: productData.title,
          price: productData.price,
          img: productData.imageUrl,
        },
      });
    }
  };

  console.log(productData);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : productData ? (
        <div>
          <div className="flex gap-20 justify-center">
            <div>
              <img
                className="h-96 w-96"
                src={productData.imageUrl}
                alt={productData.title}
              />
            </div>
            <div className="self-center">
              <h1>{productData.title}</h1>
              {productData.rating && (
                <StarRating rating={productData.rating} maxRating={5} />
              )}{" "}
              <p>Description: {productData.description}</p>
              <p>{productData.discountedPrice} $</p>
              <p className="line-through text-brand-grey">
                {productData.price} $
              </p>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div>
            <h2 className="p-10">Reviews:</h2>
            {productData.reviews.length > 0 ? (
              productData.reviews.map((review, index) => (
                <div className="p-10 mb-10 shadow-lg" key={index}>
                  <StarRating rating={review.rating} maxRating={5} />
                  <p className="mt-2">{review.description}</p>
                  <p className="mt-4">{review.username}</p>
                </div>
              ))
            ) : (
              <p>No reviews available yet.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default Product;
