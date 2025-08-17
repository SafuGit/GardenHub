import React from 'react';
import UserCard from '../OverviewCards/UserCard';
import { useLoaderData } from 'react-router';
import TotalGardenersCard from '../OverviewCards/TotalGardenersCard';
import TotalTipsCard from '../OverviewCards/TotalTipsCard';
import Notifications from '../Notifications/Notifications';
import TotalLikesCard from '../OverviewCards/TotalLikesCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Lottie from 'lottie-react';
// import dashboardLottie from '../../../assets/dashboardLottie.json';
import Tasks from '../Notifications/Tasks';

const Overview = () => {
  const stats = useLoaderData();
  // console.log(stats);

  return (
    <div className='flex' style={{
      // backgroundImage: "url('/assets/radar.png')",
    }}>
      <div className='flex flex-col p-8'>
        <div className='grid grid-cols-3'>
          <div className='flex justify-between col-span-3'>
            <TotalGardenersCard count={stats.gardenersCount}></TotalGardenersCard>
            <TotalTipsCard count={stats.tipsCount}></TotalTipsCard>
            <TotalLikesCard count={stats.totalLikes}></TotalLikesCard>
          </div>
          <UserCard></UserCard>
          <Notifications></Notifications>
        </div>
      </div>
      <div className='p-4 hidden lg:block'>
        <Tasks></Tasks>
      </div>
    </div>
  );
};

export default Overview;