import React from 'react';

const SectionTitle = ({title, className}) => {
  return (
    <div className={`mb-5 w-[95vw] mx-auto ${className}`}>
      <h1 className='font-bold text-3xl text-yellow-600'>{title}</h1>
    </div>
  );
};

export default SectionTitle;