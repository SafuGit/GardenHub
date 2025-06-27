import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { BsPerson } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import './UpdateTips.css';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';

const UpdateTips = () => {
  const data = useLoaderData();
  const {user, loading} = use(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>
  }

  const handleUpdateTip = e => {
    e.preventDefault();
    const form = e.target;
    const [title, plantType, difficulty, description, category, availability, imageURL] = new FormData(form).values();
    const tip = {
      title: title,
      plantType: plantType,
      difficulty: difficulty,
      description: description,
      category: category,
      availability: availability,
      userName: user.displayName,
      userEmail: user.email,
      imageURL: imageURL
    }

    // console.log(tip);

    fetch(`https://gardenhub-server-nine.vercel.app/tips/${data._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tip)
    })
      .then(res => res.json())
      // eslint-disable-next-line no-unused-vars
      .then(data => {
        // console.log("after updating tip", data);
        Swal.fire({
          title: 'Tip Updated Successfully!',
          icon: 'success',
          background: '#1e1e1e',
          color: '#a0ffb0', 
          iconColor: '#00ff88', 
          confirmButtonColor: '#00c472', 
          customClass: {
            popup: 'my-swal-dark'
          }
        })
        navigate('/myTips');
      })
  }

  return (
    <>
      <div className='bgUpdate border border-black p-8 rounded-xl w-[90%] my-10 mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-4'>Update Tip</h1>
        <form className='grid grid-cols-2 mt-8' onSubmit={handleUpdateTip}>
          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Title</label>
            <input type="text" name='title' className='input rounded-lg w-[80%] mx-auto' placeholder='Title (e.g., “How I Grow Tomatoes Indoors”)' defaultValue={data.title} />
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Plant Type</label>
            <input type="text" name='plantType' className='input rounded-lg w-[80%] mx-auto' placeholder='Plant Type/Topic' defaultValue={data.plantType} />
          </div>

          <div className='flex flex-col w-full mt-4'>
            <label className="label text-white w-[80%] mx-auto">Difficulty Level</label>
            <select name='difficulty' defaultValue={data.difficulty} className="select w-[80%] mx-auto mt-1">
              <option disabled={true}>Pick a Difficulty</option>
              <option value={"Easy"}>Easy</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Hard"}>Hard</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Description</label>
            <textarea type="text" name='description' className='textarea rounded-lg w-[80%] mx-auto' placeholder='Description (eg: An easy method to grow Tomatoes)' defaultValue={data.description} />
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Category</label>
            <select name='category' defaultValue={data.category} className="select w-[80%] mx-auto mt-1">
              <option disabled={true}>Pick a Category</option>
              <option value={"Composting"}>Composting</option>
              <option value={"Plant Care"}>Plant Care</option>
              <option value={"Vertical Gardening"}>Vertical Gardening</option>
            </select>
          </div>

          <div className='flex flex-col w-full mt-4'>
            <label className="label text-white w-[80%] mx-auto">Availability</label>
            <select name='availability' defaultValue={data.availability} className="select w-[80%] mx-auto mt-1">
              <option disabled={true}>Select Availability</option>
              <option value={"public"}>Public</option>
              <option value={"hidden"}>Hidden</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">User Name <BsPerson></BsPerson></label>
            <input type="text" name='userName' className='input rounded-lg w-[80%] mx-auto text-white!' placeholder={user.displayName} defaultValue={user.displayName} disabled/>
          </div>

          <div className='flex flex-col w-full mt-4'>
            <label className="label text-white w-[80%] mx-auto">User Email <MdEmail></MdEmail></label>
            <input type="text" name='userEmail' className='input rounded-lg w-[80%] mx-auto text-white!' placeholder={user.email} defaultValue={user.email} disabled/>
          </div>

          <div className='flex flex-col w-full col-span-2 mt-2'>
            <label className="label text-white w-[90%] mx-auto">Image URL</label>
            <input type="text" name='imageURL' className='input rounded-lg w-[90%] mx-auto' placeholder='Images url' defaultValue={data.imageURL} />
          </div>
          <input type="submit" className='btn col-span-2 w-[90%] mx-auto mt-8' />
        </form>
      </div>
    </>
  );
};

export default UpdateTips;