import React from "react";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = ({ post, setSearchResult }) => {
  const handlesubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(post);

    const resultArray =
      post.filter((post) => post.title.includes(e.target.value)) ||
      post.body.includes(e.target.value);

    setSearchResult(resultArray);
  };

  return (
    <div>
      <header>
        <form onSubmit={handlesubmit}>
          <input
            className=""
            type="text"
            id="search"
            onChange={handleSearchChange}
          />
          <button className="">
            <DocumentMagnifyingGlassIcon />
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
