import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { BsPerson } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import './UpdateTips.css';

const UpdateTips = () => {
  const data = useLoaderData();
  const {user} = use(AuthContext);
  return (
    <>
      <div className='bgUpdate border border-black p-8 rounded-xl w-[95vw] mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-4'>Update Tip</h1>
        <form className='grid grid-cols-2 mt-8' onSubmit={''}>
          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Title</label>
            <input type="text" name='title' className='input rounded-lg w-[80%] mx-auto' placeholder='Title (e.g., “How I Grow Tomatoes Indoors”)' value={data.title} />
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Plant Type</label>
            <input type="text" name='plantType' className='input rounded-lg w-[80%] mx-auto' placeholder='Plant Type/Topic' value={data.plantType} />
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
            <textarea type="text" name='description' className='textarea rounded-lg w-[80%] mx-auto' placeholder='Description (eg: An easy method to grow Tomatoes)' value={data.description} />
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
            <input type="text" name='userName' className='input rounded-lg w-[80%] mx-auto text-white!' placeholder={user.displayName} value={user.displayName} disabled/>
          </div>

          <div className='flex flex-col w-full mt-4'>
            <label className="label text-white w-[80%] mx-auto">User Email <MdEmail></MdEmail></label>
            <input type="text" name='userEmail' className='input rounded-lg w-[80%] mx-auto text-white!' placeholder={user.email} value={user.email} disabled/>
          </div>

          <div className='flex flex-col w-full col-span-2 mt-2'>
            <label className="label text-white w-[90%] mx-auto">Image URL</label>
            <input type="text" name='imageURL' className='input rounded-lg w-[90%] mx-auto' placeholder='Images url' value={data.imageURL} />
          </div>
          <input type="submit" className='btn col-span-2 w-[90%] mx-auto mt-8' />
        </form>
      </div>
    </>
  );
};

export default UpdateTips;