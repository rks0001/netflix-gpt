import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {BACKGROUND_URL} from '../utils/constants'
import NormalSearch from './NormalSearch'
import { useSelector } from 'react-redux'
const GptSearch = () => {
  const suggestions = useSelector(store => store.gpt.gptMovies); 
  return (
    <div>
        <div className="absolute w-screen h-screen -z-10 bg-black">
           
       </div>
        {/* <GptSearchBar/> */}
        <NormalSearch/>
        {suggestions !== null ? <GptMovieSuggestions/> : <h1>Search for Movies</h1>}
        
    </div>
  )
}

export default GptSearch