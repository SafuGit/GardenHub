import React from 'react';
import { FaThumbsUp } from 'react-icons/fa6';

const TotalLikesCard = ({count}) => {
  return (
    <div className='p-4 rounded-xl justify-between shadow-lg flex flex-col gap-4 w-[30%] mb-4 bg-gradient-to-t from-pink-950 to-pink-700 border border-gray-600 sm:h-[150%]'>
      <div>
        <h1 className='text-5xl'>{count}</h1>
        <p className='text-xl'>Likes</p>
      </div>
      <div className='flex justify-center items-end h-full'>
        <FaThumbsUp className='text-7xl'></FaThumbsUp>
      </div>
    </div>
  );
};

export default TotalLikesCard;