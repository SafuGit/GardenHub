import React, { use } from 'react';
import './ShareTip.css';
import { BsPerson } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AuthContext } from '../../contexts/AuthContext';

const ShareTip = () => {
  const {user} = use(AuthContext);

  const handleTipAdd = e => {
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

    fetch('http://localhost:3000/tips', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tip)
    })
      .then(res => res.json())
      .then(data => {
        console.log("after adding tip", data);
      })
  }

  return (
    <div className='w-[95vw] mx-auto rounded-xl p-8 bg-base-300 border-black border-2 bg'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Share a Tip 💡</h1>
        <p className='opacity-50 text-white'>Sharing tips is a great way to help others, It can benefit other gardeners as well. <br /> We at GardenHub immensely value your opinion and tricks. </p>
        <form className='grid grid-cols-2 mt-8' onSubmit={handleTipAdd}>
          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Title</label>
            <input type="text" name='title' className='input rounded-lg w-[80%] mx-auto' placeholder='Title (e.g., “How I Grow Tomatoes Indoors”)' />
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Plant Type</label>
            <input type="text" name='plantType' className='input rounded-lg w-[80%] mx-auto' placeholder='Plant Type/Topic' />
          </div>

          <div className='flex flex-col w-full mt-4'>
            <label className="label text-white w-[80%] mx-auto">Difficulty Level</label>
            <select name='difficulty' defaultValue="Difficulty Level (Easy/Medium/Hard)." className="select w-[80%] mx-auto mt-1">
              <option disabled={true}>Pick a Difficulty</option>
              <option value={"Easy"}>Easy</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Hard"}>Hard</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Description</label>
            <textarea type="text" name='description' className='textarea rounded-lg w-[80%] mx-auto' placeholder='Description (eg: An easy method to grow Tomatoes)' />
          </div>

          <div className='flex flex-col w-full'>
            <label className="label text-white w-[80%] mx-auto">Category</label>
            <select name='category' defaultValue="Category" className="select w-[80%] mx-auto mt-1">
              <option disabled={true}>Pick a Category</option>
              <option value={"Composting"}>Composting</option>
              <option value={"Plant Care"}>Plant Care</option>
              <option value={"Vertical Gardening"}>Vertical Gardening</option>
            </select>
          </div>

          <div className='flex flex-col w-full mt-4'>
            <label className="label text-white w-[80%] mx-auto">Availability</label>
            <select name='availability' defaultValue="Availability" className="select w-[80%] mx-auto mt-1">
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
            <input type="text" name='imageURL' className='input rounded-lg w-[90%] mx-auto' placeholder='Images url' />
          </div>
          <input type="submit" className='btn col-span-2 w-[90%] mx-auto mt-8' />
        </form>
      </div>
    </div>
  );
};

export default ShareTip;