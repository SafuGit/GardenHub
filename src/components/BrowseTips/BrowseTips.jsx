import React, { useState } from 'react';
import { GoEye } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router';

const BrowseTips = () => {
  const data = useLoaderData();
  const [dataState, setDataState] = useState(data);

  const handleFilter = (difficulty) => {
    fetch(`http://localhost:3000/tips/public/difficulty/${difficulty}`)
      .then(res => res.json())
      .then(resultData => {
        setDataState(resultData);
        // console.log(resultData);
      })
  }

  return (
    <div className='w-[95vw] mx-auto'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold text-white'>Browse Tips</h1>
        <ul className="menu menu-horizontal bg-base-200 rounded-box gap-2">
          <li className='bg-green-700 rounded-lg'><a onClick={() => handleFilter('Easy')}>Easy</a></li>
          <li className='bg-yellow-700 rounded-lg'><a onClick={() => handleFilter('Medium')}>Medium</a></li>
          <li className='bg-red-700 rounded-lg'><a onClick={() => handleFilter('Hard')}>Hard</a></li>
        </ul>
      </div>
      <div className='overflow-x-auto rounded-box border border-base-content/50 bg-base-200 mt-4'>
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataState.map(tip => (
              <tr key={tip._id}>
                <td className='w-[15%]'>
                  <img src={tip.imageURL} className='w-36 rounded-xl' alt="" />
                </td>
                <td className='font-bold text-lg'>{tip.title}</td>
                <td className='font-medium text-md'>
                  <select className='select' defaultValue={tip.category}>
                    <option defaultChecked>{tip.category}</option>
                  </select>
                  </td>
                <td><Link to={`/tips/${tip._id}`} className='btn btn-primary font-bold'>See More <GoEye></GoEye></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;