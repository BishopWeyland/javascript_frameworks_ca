import React, { useState, useEffect } from "react";
import { fetchProducts } from "../Api";
import ProductCard from "../components/ProductCard";
import { default as Search } from "../components/Search";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchProducts();
        setData(apiData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-5 py-12">
      <div className="flex items-center justify-between my-10">
        <h1 className="text-3xl font-bold font-serif">Popular products:</h1>
        <div className="w-72">
          <Search
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            data={data}
            setFilteredProducts={setFilteredProducts}
          />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {searchInput
            ? filteredProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            : data.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      )}
    </div>
  );
}

export default Home;
