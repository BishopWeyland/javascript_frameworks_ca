import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

function Product() {
  const { state, dispatch } = useCart();

  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
          // Og legge til andre ting som trengs
        },
      });
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : productData ? (
        <div>
          <h3>{productData.title}</h3>
          <p>Price: ${productData.price}</p>
          <p>Description: {productData.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
