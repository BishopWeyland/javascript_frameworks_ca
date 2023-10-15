import React, { useEffect } from "react";
import { StyledInput } from "./input";

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
      <StyledInput
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
