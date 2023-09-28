import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { addGptMovieResult } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES, API_OPTIONS  } from '../utils/constants'
import { changeLanguage } from '../utils/configSlice'

const NormalSearch = () => {
  const dispatch = useDispatch(); 
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null); 

    const searchMovieTMDB  = async () => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +searchText.current.value+'&include_adult=false&language=en-US&page=1', API_OPTIONS); 
      const json = await data.json(); 

      console.log(json.results) ;
      dispatch(addGptMovieResult(json.results))

    }
    const handleLanguageChange = (e)=>{ 
      dispatch(changeLanguage(e.target.value))
    }
  
   

  return (
    <div className='pt-[70%] md:pt-[10%] flex flex-col justify-center items-center'>
        <div> {showGptSearch && <select className='  px-4 py-2 bg-gray-900 text-white m-2 rounded-lg' onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map((lang)=>( <option className='text-sm md:text-lg' key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}</select>}</div> 
        <form className='w-10/12 md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-8' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-1 md-py-2  m-2 md:m-4 px-4 bg-red-700 text-white rounded-lg col-span-4' onClick={searchMovieTMDB}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default NormalSearch