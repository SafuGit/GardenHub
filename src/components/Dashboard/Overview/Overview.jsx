import React from 'react';
import UserCard from '../OverviewCards/UserCard';
import { useLoaderData } from 'react-router';
import TotalGardenersCard from '../OverviewCards/TotalGardenersCard';
import TotalTipsCard from '../OverviewCards/TotalTipsCard';

const Overview = () => {
  const stats = useLoaderData();
  // console.log(stats);

  return (
    <div className='flex gap-4'>
      <div className='flex flex-col'>
        <div className='flex gap-2'>
          <TotalGardenersCard count={stats.gardenersCount}></TotalGardenersCard>
          <TotalTipsCard count={stats.tipsCount}></TotalTipsCard>
        </div>
        <UserCard></UserCard>
      </div>
    </div>
  );
};

export default Overview;