import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch(); 

    // const trailerVideo = useSelector(store=> store.movies.trailerVideo);

    const getMovieVideos = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS); 
        const json = await data.json(); 

        const filterData = json.results.filter((movie) => movie.type ==="Trailer"); 
        const trailer = filterData.length? filterData[0] : json.results[0]; 
        
        dispatch(addTrailerVideo(trailer));
    
    }

    useEffect(()=>{
        getMovieVideos(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useMovieTrailer