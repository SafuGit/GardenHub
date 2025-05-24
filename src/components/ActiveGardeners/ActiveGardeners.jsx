import React, { use } from 'react';
import ActiveGardeningCard from './ActiveGardeningCard';
import './ActiveGardeners.css';

const ActiveGardeners = ({gardenersPromise}) => {
  const data = use(gardenersPromise);
  return (
    <div className='w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12' id='active-gardeners'>
      {data.map((gardener, i) => (
        <ActiveGardeningCard key={i} gardener={gardener}></ActiveGardeningCard>
      ))}
    </div>
  );
};

export default ActiveGardeners;