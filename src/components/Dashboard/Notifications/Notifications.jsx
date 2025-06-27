import React from 'react';
import { BiBell } from 'react-icons/bi';

const notifications = [
  {
    id: 1,
    type: "reminder",
    message: "It's time to water your Aloe Vera plant today!",
    avatar: "https://img.daisyui.com/images/profile/demo/plant1.webp",
    time: "2 hours ago"
  },
  {
    id: 2,
    type: "tip",
    message: "New gardening tip: Use coffee grounds to enrich your soil.",
    avatar: "https://img.daisyui.com/images/profile/demo/tip.webp",
    time: "1 day ago"
  },
  {
    id: 3,
    type: "weather",
    message: "Frost warning tonight — protect your outdoor plants!",
    avatar: "https://img.daisyui.com/images/profile/demo/weather.webp",
    time: "3 hours ago"
  },
  {
    id: 4,
    type: "community",
    message: "Sabrino Gardener posted a new photo of his succulent collection.",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    time: "30 minutes ago"
  },
  {
    id: 5,
    type: "reminder",
    message: "Time to fertilize your tomato plants this week.",
    avatar: "https://img.daisyui.com/images/profile/demo/plant2.webp",
    time: "5 days ago"
  }
];


const Notifications = () => {
  return (
    <div className='mt-4 col-span-3'>
      <ul className="list bg-base-200 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex items-center gap-2"> <span className='text-xl'> <BiBell></BiBell> </span> Notifications this week</li>

        {notifications.map((notification, index) => (
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">0{index + 1}</div>
            {/* <div><img className="size-10 rounded-box" src="https://img.freepik.com/premium-vector/notification-bell-icon-yellow-background-with-reminder-vector-illustration_263779-478.jpg"/></div> */}
            <div className="list-col-grow">
              <div>{notification.message}</div>
              <div className="text-xs uppercase font-semibold opacity-60">{notification.type}</div>
            </div>
            {/* <button className="btn btn-square btn-ghost"> */}
              <BiBell className='text-2xl'></BiBell>
            {/* </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;