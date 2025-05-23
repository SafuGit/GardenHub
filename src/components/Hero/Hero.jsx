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
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">The <span className='text-green-500 font-extrabold underline'>Gardening App</span> That <Typewriter words={["Innovates", "Enhances", "Communicates", "Helps"]} delaySpeed={4000} cursorBlinking={true} cursor={true} loop={true}></Typewriter></h1>
          <p className="mb-5">
            Discover the ultimate companion for plant lovers. Whether you’re growing herbs on a balcony or cultivating a full backyard garden, our app guides and inspires every step of the way. 🌱
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;