import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const TipDetails = () => {
  const [liked, setLiked] = useState(false);

  const handleSetLiked = (id) => {
    fetch(`http://localhost:3000/tips/like/${id}`, {
      method: 'PUT',
    }).then(res => res.json())
      // eslint-disable-next-line no-unused-vars
      .then(data => {
        Swal.fire({
          title: 'Tip Liked!',
          icon: 'success',
          background: '#1e1e1e',
          color: '#a0ffb0', 
          iconColor: '#00ff88', 
          confirmButtonColor: '#00c472', 
          customClass: {
            popup: 'my-swal-dark'
          }
        }).then(result => {
          if (result.isConfirmed) {
            location.reload();
          }
        }) 
        setLiked(true);
      })
  }

  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className='w-[80vw] mx-auto mb-4'>
        <h1 className='text-3xl font-bold text-gray-200 italic'>{data.title}</h1>
      </div>
      <div className='w-[80vw] bg-base-200 rounded-xl flex flex-col mx-auto p-8'>
        <div>
          <img src={data.imageURL} alt="" className='rounded-lg' />
        </div>
        <div className='divider divider-vertical divider-secondary'></div>
        <div>
          <p className='font-semibold text-xl'><span className='underline underline-offset-5 text-white'>Plant Type:</span> {data.plantType} 🌱</p>
          {data.difficulty == 'Hard' ? <div className='font-semibold text-xl mt-2'>
            <span className='underline underline-offset-5 text-white mr-2'>Difficulty:</span>
            <div className='badge badge-warning'>HARD</div>
          </div> : ""}
          {data.difficulty == 'Medium' ? <div className='font-semibold text-xl mt-2'>
            <span className='underline underline-offset-5 text-white mr-2'>Difficulty:</span>
            <div className='badge bg-yellow-700 text-white'>MEDIUM</div>
          </div> : ""}
          {data.difficulty == 'Easy' ? <div className='font-semibold text-xl mt-2'>
            <span className='underline underline-offset-5 text-white mr-2'>Difficulty:</span>
            <div className='badge bg-secondary text-white'>EASY</div>
          </div> : ""}
          <div className='flex flex-col gap-1 mt-2'>
            <h1 className='text-xl font-bold text-white'>Description</h1>
            <p className='text-sm'>{data.description}</p>
          </div>
          <div className='mt-2 text-xl font-semibold flex gap-2'>
            <span className='underline underline-offset-5 text-white mr-2'>Category:</span>
            <div className='badge badge-outline'>{data.category}</div>
          </div>
          <div className='flex gap-4 mt-4'>
            <div className='flex gap-2 rounded-lg bg-base-100 p-2'>
              <IoPerson className='text-2xl rounded-lg text-blue-400'></IoPerson>
              <p>{data.userName}</p>
            </div>
            <div className='flex gap-2 rounded-lg bg-base-100 p-2 flex-wrap text-wrap'>
              <MdEmail className='text-2xl rounded-lg text-yellow-400'></MdEmail>
              <p>{data.userEmail}</p>
            </div>
          </div>
          {liked ? <button className='btn bg-gray-700 w-full mt-8 text-2xl'>Already Liked <FaThumbsUp></FaThumbsUp></button> : <button className='btn btn-secondary w-full mt-8 text-2xl' onClick={() => handleSetLiked(data._id)}>Like <FaThumbsUp></FaThumbsUp></button>}
        </div>
      </div>
    </>
  );
};

export default TipDetails;