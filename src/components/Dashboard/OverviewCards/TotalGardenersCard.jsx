import React from 'react';

const TotalGardenersCard = ({count}) => {
  return (
    <div className='p-4 rounded-xl shadow-lg flex flex-col gap-4 w-[30%] truncate mb-4 bg-gradient-to-t from-purple-950 to-purple-700 border border-gray-600'>
      <div>
        <h1 className='text-2xl'>{count}</h1>
        <p className='text-sm'>Gardeners 🏡</p>
      </div>
      <div>
        <svg viewBox="0 0 100 40" className="h-12">
          <polyline
            fill="none"
            stroke="rgb(168, 85, 247)"
            strokeWidth="2"
            points="0,30 15,20 30,25 45,10 60,15 75,5 90,10,10"
          />
        </svg>
      </div>
    </div>
  );
};

export default TotalGardenersCard;