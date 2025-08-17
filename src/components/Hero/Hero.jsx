import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen mb-15"
      style={{
        backgroundImage:
          "url(https://beautifulboundarieslawn.com/wp-content/uploads/2019/02/Depositphotos_11104897_xl-2015-scaled-1.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            The <span className='text-green-500 font-extrabold'>Gardening Community</span> That{' '}
            <Typewriter 
              words={["Connects", "Shares", "Inspires", "Grows"]} 
              delaySpeed={4000} 
              cursorBlinking={true} 
              cursor={true} 
              loop={true} 
            />
          </h1>
          <p className="mb-5 text-lg text-gray-100">
            Join a vibrant community of plant lovers. Share tips, showcase your garden, participate in local events, and grow together with fellow enthusiasts. 🌱
          </p>
          <a
            href="/register"
            className="btn bg-yellow-500 rounded-full px-8 py-4 text-lg text-green-950 hover:text-white hover:bg-green-950 transition-all"
          >
            Join the Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
