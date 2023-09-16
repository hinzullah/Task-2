import React, { useState, useEffect } from "react";
import logo from "../../assets/tv.png";
import tomatoes from "../../assets/tomatoes.png";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import {
  AiFillPlayCircle,
  AiOutlineSearch,
  AiOutlineMenu,
  AiFillFacebook,
} from "react-icons/ai";
import axios from "axios";
import MovieCard from "../cards/MovieCard";
import "./homepage.css";
import imdb from "../../assets/imdb.png";

const Homepage = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [searchKey, setSearchkey] = useState("");

  const fetchMovies = async () => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: searchKey,
      },
    });

    setSelectedMovie(results[0]);
    setMovies(results.slice(0, 10));
  };

  useEffect(() => {
    fetchMovies();
  });

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        movie={movie}
        selectMovie={setSelectedMovie}
      />
    ));
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <div className="homepage ">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${IMAGE_PATH}${selectedMovie.poster_path})`,
        }}
      >
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>MovieBox</h3>
          </div>
          <div className="searchbar">
            <input
              type="text"
              onChange={(e) => setSearchkey(e.target.value)}
              placeholder="What do you want to watch?"
            />
            <span>
              <AiOutlineSearch onClick={searchMovies} />
            </span>
          </div>
          <div className="sign-in">
            <h5>Sign in</h5>
            <span>
              <AiOutlineMenu />
            </span>
          </div>
        </div>
        <div className="banner-content">
          <h2>{selectedMovie.title}</h2>
          <div>
            <div className="rating">
              <p>
                <img src={imdb} alt="logo" />
                <span>86/100</span>
              </p>
              <p className="two">
                <img src={tomatoes} alt="tomatoes" />
                <span>97%</span>
              </p>
            </div>
            {selectedMovie.overview ? <p>{selectedMovie.overview}</p> : null}
            <button>
              <span>
                <AiFillPlayCircle />
              </span>
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      <div className="movie-head">
        <h2>Feature Movie</h2>
        <p>See More</p>
      </div>
      <div className="container">{renderMovies()}</div>
      <div className="home-footer">
        <div className="social">
          <AiFillFacebook />
          <FiInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
        <div className="info">
          <h6>Condition of use</h6>
          <h6>Privacy and Policy</h6>
          <h6>Press Room</h6>
        </div>
        <div className="trademark">
          <h6>&copy; 2023 MovieBox By Oduola Kamol Alao</h6>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
