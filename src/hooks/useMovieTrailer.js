import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../slice/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_OPTIONS,
    );
    const json = await data.json();

    const filteredVideo = json.results.filter(
      (video) => video.type === "Trailer",
    );
    const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
