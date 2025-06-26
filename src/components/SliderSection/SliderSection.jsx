import React, { use } from 'react';
import SliderComp from '../SliderComp/SliderComp';

const SliderSection = ({eventsPromise}) => {
  const data = use(eventsPromise);
  return (
    <div className='w-[95vw] mx-auto rounded-xl min-h-[70vh] bg-base-200'>
      <SliderComp data={data}></SliderComp>
    </div>
  );
};

export default SliderSection;