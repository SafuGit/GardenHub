import React from 'react';
import './ActiveGardeningCard.css';
import { FaFemale } from 'react-icons/fa';
import { GiAges, GiFemale } from 'react-icons/gi';
import { MdFemale, MdMale } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5';
import { TbOld } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router';

const ActiveGardeningCard = ({gardener}) => {
  return (
    <div className="card gardener-card image-full shadow-sm">
      <figure>
        <img
          src={gardener.image}
          alt="Gardener Image" 
          className='w-full'/>
      </figure>
      <div className="card-body">
        <div className='flex gap-2 justify-between'>
          <div className='flex'>
            <h2 className="card-title text-2xl font-bold underline">{gardener.name}</h2>
            {
              gardener.gender == 'Male' ? <MdMale className='text-4xl text-blue-400'></MdMale> : <MdFemale className='text-4xl text-pink-400'></MdFemale>
            }
          </div>
          {gardener.status == 'active' ? <div className='badge badge-success'>ACTIVE</div> : <div className='badge badge-error'>INACTIVE</div>}
        </div>
        <p className='text-gray-300 text-sm'>
          {gardener.bio} <br /> <br />
          <span className='flex flex-col gap-1'>
            <span className='flex gap-1 items-end text-red-50 font-medium'>
              <IoLocation className='text-2xl text-red-400'></IoLocation> {gardener.location}
            </span>
          </span>
        </p>
        <div className='flex gap-2'>
          <div className='badge bg-yellow-300 text-black font-bold'>{gardener.rating} <BsStarFill></BsStarFill></div>
          <div className='badge badge-info font-semibold' data-tooltip-id='totalTipsTooltip' data-tooltip-content={`Total Tips Shared by ${gardener.name}`}>{gardener.totalSharedTips} 💡</div>
        </div>
        <Link to={`/gardener/${gardener._id}`} className='btn btn-primary mt-8'>View Details</Link>
      </div>
      <Tooltip id='totalTipsTooltip'></Tooltip>
    </div>
  );
};

export default ActiveGardeningCard;