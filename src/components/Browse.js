import React, { useEffect } from "react";
import Header from "./Header";
import { TMDB_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div className="">
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Browse;
