import React from "react";
import './dog.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input 
        className="a" 
		type="search"
	
        placehoder="search dogs"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
