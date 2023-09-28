import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-4'>
         <h1 className='text-2xl py-2 text-white font-semibold'>{title}</h1>
        <div className='flex overflow-x-scroll scroll-smooth'>
           
            <div className='flex '>
            {movies?.map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
            </div>
        </div>
        

    </div>
  )
}

export default MovieList