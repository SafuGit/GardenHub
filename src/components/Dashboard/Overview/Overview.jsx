import React from 'react';
import UserCard from '../OverviewCards/UserCard';
import { useLoaderData } from 'react-router';
import TotalGardenersCard from '../OverviewCards/TotalGardenersCard';
import TotalTipsCard from '../OverviewCards/TotalTipsCard';
import Notifications from '../Notifications/Notifications';

const Overview = () => {
  const stats = useLoaderData();
  // console.log(stats);

  return (
    <div className='flex gap-4'>
      <div className='flex flex-col'>
        <div className='grid grid-cols-3'>
          <div className='flex justify-between col-span-2'>
            <TotalGardenersCard count={stats.gardenersCount}></TotalGardenersCard>
            <TotalTipsCard count={stats.tipsCount}></TotalTipsCard>
          </div>
          <UserCard></UserCard>
          <Notifications></Notifications>
        </div>
      </div>

    </div>
  );
};

export default Overview;