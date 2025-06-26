import React from 'react';
import { useLoaderData } from 'react-router';
import ActiveGardeningCard from '../ActiveGardeners/ActiveGardeningCard';

const ExploreGardeners = () => {
  const data = useLoaderData();
  return (
    <div className='w-[95vw] mx-auto mt-10'>
      <h1 className='text-3xl text-center italic underline'>Explore Gardeners</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-10'>
        {data.map((gardener, i) => (
          <ActiveGardeningCard key={i} gardener={gardener}></ActiveGardeningCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;