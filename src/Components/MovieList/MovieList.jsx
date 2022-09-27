import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
