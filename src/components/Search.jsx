import React, { useEffect } from "react";

function Search({ searchInput, setSearchInput, data, setFilteredProducts }) {
  useEffect(() => {
    const filterProducts = () => {
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [searchInput, data, setFilteredProducts]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full p-2 mt-4 mb-4 border border-gray-300 rounded-md"
      />
    </div>
  );
}

export default Search;
