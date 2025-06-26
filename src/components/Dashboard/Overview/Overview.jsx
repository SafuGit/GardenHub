import React from 'react';
import UserCard from '../OverviewCards/UserCard';
import { useLoaderData } from 'react-router';
import TotalGardenersCard from '../OverviewCards/TotalGardenersCard';
import TotalTipsCard from '../OverviewCards/TotalTipsCard';
import Notifications from '../Notifications/Notifications';
import TotalLikesCard from '../OverviewCards/TotalLikesCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Overview = () => {
  const stats = useLoaderData();
  console.log(stats);

  return (
    <div className='flex' style={{
      backgroundImage: "url('/assets/radar.png')",
    }}>
      <div className='flex flex-col p-12'>
        <div className='grid grid-cols-4'>
          <div className='flex justify-between col-span-3'>
            <TotalGardenersCard count={stats.gardenersCount}></TotalGardenersCard>
            <TotalTipsCard count={stats.tipsCount}></TotalTipsCard>
            <TotalLikesCard count={stats.totalLikes}></TotalLikesCard>
          </div>
          <UserCard></UserCard>
          <Notifications></Notifications>
        </div>
      </div>
    </div>
  );
};

export default Overview;