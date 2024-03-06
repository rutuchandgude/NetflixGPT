import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=()=>{
    const dispatch = useDispatch(); 
    //fetch trailer video && updating the store with trailer video data

    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/1096197/videos?language=en-US",
        API_OPTIONS
      );
  
      const json = await data.json();
      console.log(json);
  
      const filterData = json.results.filter((video) => video.type == "Trailer");
      const trailer = filterData[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
  
}

export default useMovieTrailer;