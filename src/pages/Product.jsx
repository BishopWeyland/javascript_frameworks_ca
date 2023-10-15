import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import StarRating from "../components/StarRating";
import { BaseButton } from "../components/ButtonComponent";

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
          <div className="flex-col flex gap-20 md:justify-center md:flex-row">
            <div className="flex justify-center">
              <img
                className="object-contain h-96 md:h-96 md:w-96"
                src={productData.imageUrl}
                alt={productData.title}
              />
            </div>
            <div className="self-center">
              <h1 className="text-2xl md:text-5xl my-4 md:my-8">
                {productData.title}
              </h1>
              {productData.rating && (
                <StarRating rating={productData.rating} maxRating={5} />
              )}{" "}
              <p>Description: {productData.description}</p>
              <p className="font-bold">{productData.discountedPrice} $</p>
              <p className="line-through text-brand-grey">
                {productData.price} $
              </p>
              <BaseButton onClick={handleAddToCart}>Add to Cart</BaseButton>
            </div>
          </div>
          <div>
            <h2 className="py-10 font-bold">Reviews:</h2>
            {productData.reviews.length > 0 ? (
              productData.reviews.map((review, index) => (
                <div className="p-10 mb-10 shadow-lg" key={index}>
                  <StarRating rating={review.rating} maxRating={5} />
                  <p className="mt-2">{review.description}</p>
                  <p className="font-bold mt-4">{review.username}</p>
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
