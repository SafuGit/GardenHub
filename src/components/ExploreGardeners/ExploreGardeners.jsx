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
    // console.log(data);
    // console.log(sortParam);
  }

  const handleFilter = (ageGroup) => {
    // console.log(`https://gardenhub-server-nine.vercel.app/gardenFilter/age/?age=${ageGroup}`);
    fetch(`https://gardenhub-server-nine.vercel.app/gardenFilter/age/?age=${ageGroup}`)
      .then(res => res.json())
      .then(filteredData => {
        setData(filteredData);
        // console.log(filteredData);
      })
      .catch(err => console.error('Fetch error:', err));
    // console.log(data);
  }

  return (
    <div className='w-[95vw] mx-auto mt-10'>
      <div className='flex'>
        <h1 className='text-3xl text-start italic underline mr-4'>Explore Gardeners</h1>
        <button className='text-3xl btn btn-ghost btn-circle mr-1' onClick={handleSort}><BiSort></BiSort></button>
        <button className='text-3xl btn btn-ghost btn-circle' popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}><FiFilter></FiFilter></button>

        <ul className="dropdown menu w-fit rounded-box bg-base-200 shadow-sm"
          popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
          <h1 className='text-2xl text-center'>AGE</h1>
          <div className='divider divider-vertical mt-0 mb-1'></div>
          <li onClick={() => handleFilter('under30')}><a>Under 30</a></li>
          <li onClick={() => handleFilter('30to39')}><a>30-39</a></li>
          <li onClick={() => handleFilter('40-49')}><a>40-49</a></li>
          <li onClick={() => handleFilter('50plus')}><a>Over 30</a></li>
        </ul>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1215px]:grid-cols-4 gap-12 mt-10'>
        {data.map((gardener, i) => (
          <ActiveGardeningCard key={i} gardener={gardener}></ActiveGardeningCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;