import React, { Suspense } from 'react';
import SliderSection from '../SliderSection/SliderSection';
import SectionTitle from '../../utils/SectionTitle';

const eventsPromise = fetch('/events.json')
  .then(res => res.json());

const Home = () => {
  return (
    <div>
      <SectionTitle title={'Upcoming Events'}></SectionTitle>
      <Suspense fallback={<div>Loading...</div>}>
        <SliderSection eventsPromise={eventsPromise}></SliderSection>
      </Suspense>
    </div>
  );
};

export default Home;