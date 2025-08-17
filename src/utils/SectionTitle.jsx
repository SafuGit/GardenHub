import React from 'react';

const SectionTitle = ({title, className}) => {
  return (
    <div className={`mb-5 w-[95vw] mx-auto ${className}`}>
      <h2 className='text-4xl font-extrabold text-yellow-400 mb-6 text-center'>
        {title}
        <span className='block w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-3'></span>
      </h2>
    </div>
  );
};

export default SectionTitle;