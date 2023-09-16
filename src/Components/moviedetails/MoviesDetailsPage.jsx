import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "../moviedetails/Moviedetailspage.css";
import { AiFillStar } from "react-icons/ai";
import { GiTicket } from "react-icons/gi";
import { LuSlidersHorizontal } from "react-icons/lu";
import best from "../../assets/Rectangle 37.png";

const MoviesDetailsPage = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [date, setDate] = useState("Fri, 28 Jul 2023 00:00:00 GMT");
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDQwNGMxZDMyZTJjZmYzMGJmZGMzMjY0NjM0MWJjNyIsInN1YiI6IjY1MDAxYWIyMWJmMjY2MDBjNWQ1Y2JmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BMFdNdnOMIXSh-CkOrJpjOHSTAnk6ArQgEhEsdg1Uw",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        setDetails(response);
        console.log(response);

        const inputDate = new Date(response.release_date);
        const utcDate = new Date(
          Date.UTC(
            inputDate.getUTCFullYear(),
            inputDate.getUTCMonth(),
            inputDate.getUTCDate()
          )
        );
        setDate(utcDate.toUTCString());
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="movie-details">
      <Sidebar />
      <div className="backdrop">
        <div className="img-container">
          <img src={`${IMAGE_PATH}${details.backdrop_path}`} alt="backdrop" />
        </div>
        <div className="text">
          <div className="top">
            <h4 data-testid={"movie-title"}>{details.title}</h4>
            <h6>
              <span data-testid={"movie-release-date"}>{date} </span>
              <span data-testid={"runtime"}>{details.runtime}Minutes</span>
            </h6>
            <p className="star">
              <AiFillStar />
              {details.vote_average} | {details.original_language}
            </p>
          </div>
          <div className="bottom">
            <p data-testid={"overview"}>{details.overview}</p>
            <div>
              <button>
                <GiTicket />
                See Show Times
              </button>
              <button className="peach">
                <LuSlidersHorizontal /> Watch Options
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <button>Top Rated Movies</button>
          <button className="white">Award 9 nominations</button>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetailsPage;
