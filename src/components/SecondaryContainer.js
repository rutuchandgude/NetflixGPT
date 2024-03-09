import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
         <div className="bg-black px-2 pt-8 pb-16 md:px-6 lg:p-8">
            <div className="-mt-54 pl-2 flex flex-col gap-2 lg:gap-4 -mt-8 md:-mt-16 lg:-mt-24 xl:-mt-60  2xl:-mt-72 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    
        </div>
      </div>
   
    )
  );
};
export default SecondaryContainer;
