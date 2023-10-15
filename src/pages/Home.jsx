import React, { useState, useEffect } from "react";
import { fetchProducts } from "../Api";
import ProductCard from "../components/ProductCard";
import { default as Search } from "../components/Search";
import { PrimaryButton } from "../components/ButtonComponent";
import { Element, scroller } from "react-scroll";
import Hero from "../assets/images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg";

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

  const scrollToPopularProducts = () => {
    scroller.scrollTo("PopularProducts", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <div
        className="h-max py-56 px-10 flex justify-center md:h-screen bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="flex flex-col">
          <h1 className="font-bold self-center text-center my-4  text-2xl md:text-5xl md:my-8">
            Headsets for your comfort and convenience
          </h1>
          <p className="self-center text-center font-bold">
            At E-Cart you can get up to 50% off on selected headsets this
            weekend!
          </p>
          <PrimaryButton
            className="self-center w-72 md:w-96"
            onClick={scrollToPopularProducts}
          >
            Browse
          </PrimaryButton>
        </div>
      </div>

      <div className="flex flex-col justify-center md:flex-row items-center md:justify-between my-10">
        {" "}
        <Element name="PopularProducts">
          <h2 className="text-2xl md:text-5xl my-4 md:my-8">
            Popular products:
          </h2>
        </Element>
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
        <div>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {searchInput
              ? filteredProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))
              : data.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
