import React, { use } from 'react';
import { MdPerson } from 'react-icons/md';

const TrendingTips = ({tipsPromise}) => {
  const data = use(tipsPromise);
  return (
    <div className='w-[95vw] mx-auto'>
      <div className='overflow-x-auto rounded-box border border-base-content/50 bg-base-200 mt-4'>
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th><div className='flex gap-2 items-center'>Gardener <MdPerson className='text-xl'></MdPerson></div></th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map(tip => (
              <tr key={tip._id}>
                <td className='w-[15%]'>
                  <img src={tip.imageURL} className='w-36 rounded-xl' alt="" />
                </td>
                <td className='font-bold text-lg'>{tip.title}</td>
                <td className='text-lg'>{tip.userName}</td>
                <td className='font-medium text-md'>
                  <select className='select' defaultValue={tip.category}>
                    <option defaultChecked>{tip.category}</option>
                  </select>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingTips;