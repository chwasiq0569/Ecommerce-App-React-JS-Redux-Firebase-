import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="header__nav__search">
      <input className="searchBar" type="search" placeholder="Search" />
      <button className="searchBar__Btn">
        <FiSearch color="white" size="1.3rem" />
      </button>
    </div>
  );
};

export default SearchBar;
