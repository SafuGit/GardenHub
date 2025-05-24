import React, { Suspense } from 'react';
import SliderSection from '../SliderSection/SliderSection';
import SectionTitle from '../../utils/SectionTitle';
import Loading from '../Loading/Loading';
import Hero from '../Hero/Hero';
import ActiveGardeners from '../ActiveGardeners/ActiveGardeners';
import TrendingTips from '../TrendingTips/TrendingTips';
import WhyUs from '../WhyUs/WhyUs';

const eventsPromise = fetch('/events.json')
  .then(res => res.json());

const gardenersPromise = fetch('https://gardenhub-server-nine.vercel.app/gardeners/active')
  .then(res => res.json());

const tipsPromise = fetch('https://gardenhub-server-nine.vercel.app/tips/6')
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
      <SectionTitle title={'Trending Tips'} className={'italic font-bold mt-20 underline'}></SectionTitle>
      <Suspense fallback={<Loading></Loading>}>
        <TrendingTips tipsPromise={tipsPromise}></TrendingTips>
      </Suspense>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;