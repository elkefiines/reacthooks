import React from "react";
import "./MovieCard.css";
//import Rating from "../Rating/Rating";
import Rate from "../Rate";

const MovieCard = ({ movie: { posterURL, title, rating, description } }) => {
  return (
    <div className="card">
      <div className="card-left">
        <img src={posterURL} alt="poster" />
      </div>
      <div className="card-right">
        <h1>{title}</h1>
        <div className="card-rating">
          <Rate rating={rating} />
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
