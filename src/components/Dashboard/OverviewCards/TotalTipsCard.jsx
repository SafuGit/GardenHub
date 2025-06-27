import React from 'react';

const TotalTipsCard = ({count}) => {
  return (
    <div className='p-4 rounded-xl shadow-lg flex flex-col gap-4 w-[30%] mb-4 bg-gradient-to-t from-blue-950 to-blue-700 border border-gray-600 truncate'>
      <div>
        <h1 className='text-2xl'>{count}</h1>
        <p className='text-sm'>Tips 💡</p>
      </div>
      <div>
        <svg viewBox="0 0 100 40" className=" h-12">
          <polyline
            fill="none"
            stroke="white"
            strokeWidth="2"
            points="0,25 15,22 30,28 45,14 60,20 75,10 90,18"
          />
        </svg>
      </div>
    </div>
  );
};

export default TotalTipsCard;