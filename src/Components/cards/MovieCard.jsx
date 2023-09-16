import React from "react";
import "./MovieCard.css";
import { BsHeartFill } from "react-icons/bs";
import imdb from "../../assets/imdb.png";
import tomatoes from "../../assets/tomatoes.png";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, selectMovie, id }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div
      data-testid={"movie-card"}
      className="movie-card"
      onClick={() => selectMovie(movie)}
    >
      <Link to={`/movies/${id}`}>
        {movie.poster_path ? (
          <img
            className={"movie-cover"}
            data-testid={"movie-poster"}
            src={`${IMAGE_PATH}${movie.poster_path}`}
            alt=""
          />
        ) : (
          <div className="image-placeholder">No Image found</div>
        )}
      </Link>
      <span>
        <BsHeartFill />
      </span>
      <div className="movie-details">
        <p data-testid={"movie-release-date"} className={"movie-release-date"}>
          USA, {movie.release_date}
        </p>
        <h5 data-testid={"movie-title"} className={"movie-title"}>
          {movie.title}
        </h5>
        <div className="rating">
          <p>
            <img className="one" alt="logo" src={imdb} /> {movie.vote_average}
            /10
          </p>
          <p>
            <img className="two" alt="tomatoes" src={tomatoes} />{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
