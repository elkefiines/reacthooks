import React, { useState } from "react";
import "./AddPopup.css";

const AddPopup = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const { title, description, posterURL, rating } = newMovie;
  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdd = () => {
    console.log({ ...newMovie, id: Math.floor(Math.random() * 1000) });
    props.addNewMovie({ ...newMovie, id: Math.floor(Math.random() * 1000) });
    props.setShow(!props.show);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={() => props.setShow(!props.show)}>
          x
        </span>
        <div className="form">
          <h3>Add a movie</h3>
          <div className="form-body">
            <div className="title">
              <label className="form__label">Title :</label>
              <input
                className="form__input"
                type="text"
                placeholder=" Create title "
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className="description">
              <label className="form__label">Description:</label>
              <textarea
                name="description"
                cols="30"
                rows="10"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="posterURL">
              <label className="form__label">PosterURL:</label>
              <input
                name="posterURL"
                type="url"
                className="form__input"
                placeholder="Create posterURL "
                value={posterURL}
                onChange={handleChange}
              />
            </div>
            <div className="rating">
              <label className="form__label">Rating:</label>
              <input
                name="rating"
                type="number"
                className="form__input"
                placeholder="Create rating "
                min="1"
                max="5"
                value={rating}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPopup;
