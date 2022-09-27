import React from "react";
import Rate from "../Rate";
//import Rating from "../Rating/Rating";
//import { useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.setInput(e.target.value);
  };

  return (
    <div className="cart">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search..."
          value={props.input}
          onChange={handleChange}
        />
        <div className="rate">
          <Rate rating={props.rating} setRating={props.setRating} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
