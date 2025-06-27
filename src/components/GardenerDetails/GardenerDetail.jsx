import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FcDocument } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { useLoaderData } from 'react-router';

const GardenerDetail = () => {
	const data = useLoaderData();
	return (
		<div className='w-[95vw] mx-auto'>
			<div className="breadcrumbs text-sm mt-5 mb-3">
				<ul>
					<li>Gardeners</li>
					<li>{data.name}</li>
				</ul>
			</div>
			<div className='flex flex-col sm:flex-row gap-6'>
				<div>
					<img src={data.image} className='rounded-xl w-85' alt="" />
				</div>
				<div className='bg-base-200 w-full rounded-xl p-8'>
					<h1 className='text-3xl'>{data.name} ({data.age})</h1>
					<div className='divider divider-vertical mt-0 mb-2'></div>
					<div className='flex gap-2 mb-3'>
						<div className='badge bg-yellow-300 text-black font-bold'>{data.rating} <BsStarFill></BsStarFill></div>
						<div className='badge badge-info font-semibold'>{data.totalSharedTips} 💡</div>
					</div>
					<p className='mb-3'>{data.bio}</p>
					<div className='flex gap-2 items-center'>
						<GoLocation className='text-red-500 text-xl'></GoLocation>
						<p>{data.location}</p>
					</div>
					<div className='flex gap-2 items-center mt-3'>
						<FcDocument className='text-blue-500 text-xl'></FcDocument>
						<p>{data.specialization}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GardenerDetail;