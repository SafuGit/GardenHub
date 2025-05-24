import React, { Suspense } from 'react';
import SliderSection from '../SliderSection/SliderSection';
import SectionTitle from '../../utils/SectionTitle';
import Loading from '../Loading/Loading';
import Hero from '../Hero/Hero';
import ActiveGardeners from '../ActiveGardeners/ActiveGardeners';

const eventsPromise = fetch('/events.json')
  .then(res => res.json());
const gardenersPromise = fetch('http://localhost:3000/gardeners/active')
  .then(res => res.json());

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SectionTitle title={'Upcoming Events'}></SectionTitle>
      <Suspense fallback={<Loading></Loading>}>
        <SliderSection eventsPromise={eventsPromise}></SliderSection>
      </Suspense>
      <SectionTitle title={'Active Gardeners'} className={'italic mt-20 underline text-center'}></SectionTitle>
      <Suspense fallback={<Loading></Loading>}>
        <ActiveGardeners gardenersPromise={gardenersPromise}></ActiveGardeners>
      </Suspense>
    </div>
  );
};

export default Home;