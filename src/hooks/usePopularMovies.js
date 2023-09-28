import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constants"


const usePopularMovies = () =>{
    const dispatch = useDispatch(); 

    // const popularMovies = useSelector(store => store.movies.popularMovies); 

    const getPopularMovies = async() =>{
      const data = await 
      
fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS); 
      const json = await data.json(); 
      console.log(json.results);
     dispatch(addPopularMovies(json.results));
  
      
    }

    useEffect(()=>{
  getPopularMovies(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default usePopularMovies; 