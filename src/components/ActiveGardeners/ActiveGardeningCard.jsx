import React from 'react';
import './ActiveGardeningCard.css';
import { MdMale, MdFemale } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import { BsStarFill } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router';

const ActiveGardeningCard = ({ gardener }) => {
  return (
    <div className="relative group bg-gradient-to-tr from-green-700 to-green-900 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all mt-15">
      <div className='flex justify-center -mt-16'>
        <img
          src={gardener.image}
          alt={gardener.name}
          className='w-32 h-32 rounded-full border-4 border-white shadow-md object-cover'
        />
      </div>
      <div className='text-center mt-4'>
        <div className='flex justify-center items-center gap-2'>
          <h2 className='text-2xl font-bold text-yellow-300 underline'>{gardener.name}</h2>
          {gardener.gender === 'Male' ? <MdMale className='text-3xl text-blue-300' /> : <MdFemale className='text-3xl text-pink-300' />}
        </div>
        <div className='mt-2'>
          {gardener.status === 'active' ? <span className='badge badge-success'>ACTIVE</span> : <span className='badge badge-error'>INACTIVE</span>}
        </div>
        <p className='text-gray-200 text-sm mt-4'>{gardener.bio}</p>
        <div className='flex justify-center items-center gap-1 mt-2 text-gray-300'>
          <IoLocation className='text-red-400 text-xl' />
          <span>{gardener.location}</span>
        </div>
        <div className='flex justify-center gap-2 mt-4'>
          <span className='badge bg-yellow-400 text-black font-bold'>{gardener.rating} <BsStarFill /></span>
          <span
            className='badge badge-info font-semibold'
            data-tooltip-id='totalTipsTooltip'
            data-tooltip-content={`Total Tips Shared by ${gardener.name}`}
          >
            {gardener.totalSharedTips} 💡
          </span>
        </div>
        <div className='flex justify-center gap-2 mt-4 flex-wrap'>
          {gardener.skills?.map((skill, idx) => (
            <span key={idx} className='bg-yellow-600 text-black text-xs px-2 py-1 rounded-full'>
              {skill}
            </span>
          ))}
        </div>
        <Link to={`/gardener/${gardener._id}`} className='btn btn-primary mt-6 w-full'>View Details</Link>
      </div>
      <Tooltip id='totalTipsTooltip' />
    </div>
  );
};

export default ActiveGardeningCard;
