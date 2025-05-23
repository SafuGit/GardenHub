import React, { Suspense } from 'react';
import SliderSection from '../SliderSection/SliderSection';
import SectionTitle from '../../utils/SectionTitle';
import Loading from '../Loading/Loading';
import Hero from '../Hero/Hero';

const eventsPromise = fetch('/events.json')
  .then(res => res.json());

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SectionTitle title={'Upcoming Events'}></SectionTitle>
      <Suspense fallback={<Loading></Loading>}>
        <SliderSection eventsPromise={eventsPromise}></SliderSection>
      </Suspense>
    </div>
  );
};

export default Home;