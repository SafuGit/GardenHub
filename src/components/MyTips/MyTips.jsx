import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BiEdit, BiLock } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router';
import { FiDelete } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyTips = () => {
  const { user, loading } = use(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`https://gardenhub-server-nine.vercel.app/tips/user/${user.email}`)
        .then(res => res.json())
        .then(resultData => {
          setData(resultData);
          // console.log(resultData);
        })
        .catch(err => console.error('Fetch error:', err));
    }
  }, [loading, user]);

  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gardenhub-server-nine.vercel.app/tips/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
                background: '#1e1e1e',
                color: '#a0ffb0', 
                iconColor: '#00ff88', 
                confirmButtonColor: '#00c472', 
                customClass: {
                  popup: 'my-swal-dark'
                }
              })
              location.reload();
            }
          })
      }
    })
  }

  return (
    <div className='w-[90%] my-10 mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>Your Tips 💡</h1>
      <div className='overflow-x-auto rounded-box border border-base-content/50 bg-base-200 mt-4'>
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Plant Type</th>
              <th>Privacy</th>
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
                  <td>
                    {tip.difficulty == 'Hard' ? <div className='badge badge-warning'>HARD</div> : ""}
                    {tip.difficulty == 'Medium' ? <div className='badge bg-yellow-700 text-white'>MEDIUM</div> : ""}
                    {tip.difficulty == 'Easy' ? <div className='badge bg-secondary text-white'>EASY</div> : ""}
                  </td>
                  <td className='text-lg'>{tip.plantType}</td>
                  <td>
                    {tip.availability == 'public' ? <div className='badge badge-success text-black'>Public <BsEye></BsEye></div> : <div className='badge badge-error'>Private <BiLock></BiLock></div>}
                  </td>
                  <td>
                    <Link to={`/dashboard/updateTips/${tip._id}`} className='btn btn-warning text-xl rounded-lg mb-2'><BiEdit></BiEdit></Link>
                    <button className='btn btn-error text-xl rounded-lg' onClick={() => handleDelete(tip._id)}><MdDelete></MdDelete></button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;