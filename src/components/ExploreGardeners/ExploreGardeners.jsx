import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ActiveGardeningCard from '../ActiveGardeners/ActiveGardeningCard';
import { BiSort } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';

const ExploreGardeners = () => {
  const [sortParam, setSortParam] = useState('asc');
  const [data, setData] = useState(useLoaderData());
  const handleSort = () => {
    if (sortParam === 'asc') {
      fetch(`https://gardenhub-server-nine.vercel.app/gardenSort/${sortParam}`)
        .then(res => res.json())
        .then(sortedData => {
          setData(sortedData);
          setSortParam('desc');
        })
        .catch(err => console.error('Fetch error:', err));
    } else if (sortParam === 'desc') {
      fetch(`https://gardenhub-server-nine.vercel.app/gardenSort/${sortParam}`)
        .then(res => res.json())
        .then(sortedData => {
          setData(sortedData);
          setSortParam('asc');
        })
        .catch(err => console.error('Fetch error:', err));
    }
    console.log(data);
    console.log(sortParam);
  }

  return (
    <div className='w-[95vw] mx-auto mt-10'>
      <div className='flex'>
        <h1 className='text-3xl text-start italic underline mr-4'>Explore Gardeners</h1>
        <button className='text-3xl btn btn-ghost btn-circle mr-1' onClick={handleSort}><BiSort></BiSort></button>
        <button className='text-3xl btn btn-ghost btn-circle'><FiFilter></FiFilter></button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-10'>
        {data.map((gardener, i) => (
          <ActiveGardeningCard key={i} gardener={gardener}></ActiveGardeningCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;