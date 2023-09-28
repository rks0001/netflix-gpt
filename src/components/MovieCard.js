import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-36 md:w-48 pr-4'>
      {posterPath ? (
        <img
          className='rounded-lg'
          alt='movie'
          src={IMG_CDN_URL + posterPath}
        />
      ) : (
        <div className='rounded-lg bg-gray-400 h-64 text-xl text-center '>No Image Found</div>
      )}
    </div>
  );
};

export default MovieCard;
