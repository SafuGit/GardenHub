import React from 'react';
import { useLoaderData } from 'react-router';

const BrowseTips = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className='w-[95vw] mx-auto'>
      <h1 className='text-3xl font-bold text-white'>Browse Tips</h1>
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
            {data.map(tip => (
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
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;