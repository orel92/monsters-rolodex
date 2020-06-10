import React from "react";

import "./search-box.styles.css";

//we use distructering instead of writing props.placeholder & props.handleChange
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
