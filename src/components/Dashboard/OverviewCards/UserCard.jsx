import React, { use } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { CgMail, CgProfile } from 'react-icons/cg';
import { FaUser } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { ImClock } from 'react-icons/im';

const UserCard = () => {
  const { user } = use(AuthContext);
  return ( 
    <div className='bg-base-100 p-4 rounded-xl shadow-lg flex gap-4 w-fit col-span-2'>
      <div className='h-full text-7xl'>
        <CgProfile></CgProfile>
      </div>
      <div className='text-md'>
        <h1 className='flex gap-2 items-center'><FaUser></FaUser> {user.displayName}</h1>
        <h1 className='flex gap-2 items-center'><MdMail></MdMail> @{user.email}</h1>
        <h1 className='flex gap-2 items-center'><ImClock></ImClock> {user.metadata.creationTime} </h1>
      </div>
    </div>
  );
};

export default UserCard;