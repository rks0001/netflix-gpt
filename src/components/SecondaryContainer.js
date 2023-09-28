import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
  return ( movies.nowPlayingMovies && (
    <div className=' bg-black'>
        <div className='-mt-4 md:-mt-40 pl-2 md:pl-12 relative z-20'>
        <MovieList movies={movies.nowPlayingMovies} />
    <MovieList title={"Top Rated"} movies={movies.popularMovies} />
    <MovieList title={"Upcoming "} movies={movies.nowPlayingMovies} />
    <MovieList title={"Rom-Com"} movies={movies.popularMovies} />
        </div>
    
</div>
  )
   
  )
}

export default SecondaryContainer