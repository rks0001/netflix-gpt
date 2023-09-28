import React from 'react';
import { useSelector } from 'react-redux';

import MovieCard from './MovieCard';


const GptMovieSuggestions = () => {
  const suggestions = useSelector(store => store.gpt.gptMovies);

  // Check if suggestions is undefined or empty
  if (!suggestions || suggestions.length === 0) {
    return <div>No movie suggestions available.</div>;
  }

  return (
    <div className='bg-black text-white'>
      <div className='mx-10'>
        <div className='flex flex-wrap justify-center '>
          {suggestions.map((movie, index) => (
            <div className='mx-4 my-6 ' key={index}>
              <h1
                className='my-2 text-white text-xl text-left overflow-hidden whitespace-nowrap max-w-[200px]'
              >
                {index+1 + '. ' + movie.title} -
              </h1>
              <MovieCard
                key={movie.title}
                posterPath={movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
