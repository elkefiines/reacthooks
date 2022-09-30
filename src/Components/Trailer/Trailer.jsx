import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Trailer.css";

const Trailer = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((el) => el.title === title);
  const onClick = () => navigate("/");
  return (
    <div>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={movie.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <button className="btn" onClick={onClick}>
        Go back
      </button>
    </div>
  );
};

export default Trailer;
