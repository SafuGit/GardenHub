import React, { use } from 'react';
import { FaThumbsUp } from 'react-icons/fa6';
import { MdPerson } from 'react-icons/md';
import { Link } from 'react-router';

const TrendingTips = ({ tipsPromise }) => {
  const data = use(tipsPromise);

  return (
    <div className='w-[95vw] mx-auto mt-12 flex flex-col gap-6'>
      {data.map(tip => (
        <div
          key={tip._id}
          className='flex flex-col md:flex-row items-center md:items-start gap-4 bg-base-200 p-6 rounded-3xl shadow-md hover:shadow-lg transition-all'
        >
          <div className='flex-shrink-0 w-full md:w-48 h-32 overflow-hidden rounded-xl'>
            <img src={tip.imageURL} alt={tip.title} className='w-full h-full object-cover rounded-xl' />
          </div>

          <div className='flex-1 flex flex-col gap-2 text-white'>
            <h3 className='text-2xl font-bold text-yellow-400'>{tip.title}</h3>
            <div className='flex items-center gap-4 font-medium'>
              <div className='flex items-center gap-1'>
                <MdPerson /> {tip.userName}
              </div>
              <div className='flex items-center gap-1'>
                <FaThumbsUp /> {tip.totalLikes}
              </div>
              <span className='bg-yellow-500 text-green-900 px-2 py-1 rounded-full text-sm'>{tip.category}</span>
            </div>
            <Link
              to={`/tip/${tip._id}`}
              className='self-start mt-2 text-yellow-400 font-semibold hover:underline'
            >
              View Tip →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingTips;
