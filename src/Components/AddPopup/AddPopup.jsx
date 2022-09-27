import React from "react";
import "./AddPopup.css";

const AddPopup = (props) => {
  const handleAdd = () => {};
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
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
              />
            </div>
            <div className="description">
              <label className="form__label">Description:</label>
              <input
                type="text"
                className="form__input"
                placeholder="Create description "
              />
            </div>
            <div className="posterURL">
              <label className="form__label">PosterURL:</label>
              <input
                type="text"
                className="form__input"
                placeholder="Create posterURL "
              />
            </div>
            <div className="rating">
              <label className="form__label">Rating:</label>
              <input
                type="text"
                className="form__input"
                placeholder="Create rating "
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
