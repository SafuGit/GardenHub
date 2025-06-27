import React from 'react';
import { BiTask } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';

const gardeningTasks = [
  "Create a new garden layout",
  "Track plant watering schedule",
  "Set fertilizer reminders",
  "Log plant growth progress",
  "Browse community gardening tips",
  "Share a gardening tip",
  "Upload a plant photo",
  "View nearby gardeners",
  "Send message to a gardener",
];


const Tasks = () => {
	return (
		<div className='mt-4 col-span-3'>
			<ul className="list bg-base-200 rounded-box shadow-md">
				<li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex items-center gap-2"> <span className='text-xl'> <BiTask></BiTask> </span> Tasks this week</li>
				{gardeningTasks.map((task, index) => (
					<li className="list-row">
						<div className="text-4xl font-thin opacity-30 tabular-nums">0{index + 1}</div>
						{/* <div><img className="size-10 rounded-box" src="https://img.freepik.com/premium-vector/notification-bell-icon-yellow-background-with-reminder-vector-illustration_263779-478.jpg"/></div> */}
						<div className="list-col-grow">
							<div>{task}</div>
							<div className="text-xs uppercase font-semibold opacity-60">{index / 2} Days Ago</div>
						</div>
						<button className="btn btn-square btn-ghost">
							<TiTick className='text-2xl'></TiTick>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Tasks;