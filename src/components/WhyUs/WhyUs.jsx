import React from 'react';
import './WhyUs.css';
import WhyUsCard from './WhyUsCard';

const whyChooseUs = [
  {
    title: "Expert Gardening Tips",
    description: "Get access to a wide range of expert tips and tutorials tailored to your plants and gardening goals."
  },
  {
    title: "Personalized Plant Care",
    description: "Receive reminders and custom care schedules based on your plant type, location, and environment."
  },
  {
    title: "Community Support",
    description: "Join a thriving community of plant lovers to share advice, ask questions, and showcase your garden."
  }
];

const WhyUs = () => {
  return (
    <div className='w-full mx-auto mt-20 p-12' id='why-us'>
      <div className='w-[95vw] mx-auto mb-5'>
        <h1 className='text-5xl font-bold'>Why Us?</h1>
      </div>
      <div className='grid grid-cols-3'>
        {whyChooseUs.map((item, i) => (
          <WhyUsCard data={item} key={i}></WhyUsCard>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;