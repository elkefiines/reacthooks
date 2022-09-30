import { Fragment, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddPopup from "./Components/AddPopup/AddPopup";
//import AddMovie from "./Components/AddMovie/AddMovie";
import Filter from "./Components/Filter/Filter";
import MoviesList from "./Components/MovieList/MovieList";
import Trailer from "./Components/Trailer/Trailer";
const movies = [
  {
    title: "Samaritan",
    description:
      "Samaritan is a 2022 American superhero film directed by Julius Avery and written by Bragi F. Schut. Described as a dark, new take on superhero movies, the story was previously adapted into the Mythos Comics graphic novels by Schut, Marc Olivent, and Renzo Podesta",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpqP-dfAsrXKhbuP7N8Gi54dVSn4ng0kLo6H98KGtIhhLkNIZ",
    rating: "4",
    trailer: "https://www.youtube.com/embed/9FKnTxSC16E",
  },
  {
    title: "Incantation",
    description:
      "Six years ago, Li Ronan is cursed after breaking a religious taboo; now, she must protect her daughter from the consequences of her actions.",
    posterURL:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLTJI7-UxITWwxhmXY8SKpn4o1B6benarISnWc5F9ig0iPSSMb",
    rating: "3",
    trailer: "https://www.youtube.com/embed/HnyNZdcL_GY",
  },
  {
    title: "The Adam Project",
    description:
      "The Adam Project is a 2022 American science fiction action comedy-drama film co-produced by Skydance Media, Maximum Effort, and 21 Laps Entertainment, directed by Shawn Levy from a screenplay written by Jonathan Tropper, T.S. Nowlin, Jennifer Flackett, and Mark Levin.",
    posterURL:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGZMvynxlczttOzspLoBEulfsZHR4kiKQ_k-oixot8HxNz1xds",
    rating: "2",
    trailer: "https://www.youtube.com/embed/IE8HIsIrq4o",
  },
  {
    title: "Malicious",
    description:
      "A college professor and his pregnant wife must make a stand against a dark and murderous entity that they unwittingly release.",
    posterURL:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfu6H8vWKzOgQ-zqL5tj9xb1M88vogh4AImE42a2VeRaqS-dRA",
    rating: "5",
    trailer: "https://www.youtube.com/embed/OWCXSq61iMI",
  },
];
function App() {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(1);
  const [show, setShow] = useState(false);

  const addNewMovie = (newMovie) => {
    movies.push(newMovie);
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Filter
                input={input}
                setInput={setInput}
                rating={rating}
                setRating={setRating}
              />
              <div className="addCard" onClick={handleShow}>
                <h2>add movie</h2>
              </div>

              {show ? (
                <AddPopup
                  setShow={setShow}
                  addNewMovie={addNewMovie}
                  show={show}
                />
              ) : null}
              <MoviesList
                movies={movies.filter(
                  (movie, i) =>
                    movie.title.toLowerCase().includes(input.toLowerCase()) &&
                    movie.rating == rating
                )}
              />
            </Fragment>
          }
        />

        <Route path="/trailer/:title" element={<Trailer movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
