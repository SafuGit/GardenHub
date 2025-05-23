import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <>
      <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='w-[30vw] rounded-xl bg-base-200 text-center p-8'>
          <img src="https://www.reshot.com/preview-assets/illustrations/45NK7CHMRZ/404-page-not-found-45NK7CHMRZ-w600.jpg" alt="" className='rounded-lg mb-4' />
          <h1 className='font-bold text-3xl text-red-500'>404 NOT FOUND</h1>
          <Link to={'/'} className='btn btn-secondary mt-4'>Go Back</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;