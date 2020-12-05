import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Products from "../../products.json";

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  return (
    <div className="header__nav__search">
      <input
        className="searchBar"
        type="search"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="searchBar__Btn">
        <FiSearch color="white" size="1.3rem" />
      </button>
    </div>
  );
};

export default SearchBar;
