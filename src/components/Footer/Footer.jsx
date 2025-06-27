import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  // console.log(isDashboard);
  return (
    <div className={ isDashboard ? '' : 'mt-20'}>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="flex flex-col">
          <div className='flex items-center gap-2'>
            <img className='w-10 rounded-full' src="/assets/GardenLogo2.png" alt="" />
            <h1 className='text-xl'>🌿<span className='text-yellow-600'>Garden</span>Hub</h1>
          </div>
          <div>
            <p>Copyright © {new Date().getFullYear()} - SAFWAN SADID</p>
            <h1 className='text-lg flex gap-2 items-center'><BiPhoneCall></BiPhoneCall>01981575920</h1>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://bd.linkedin.com/in/safwan-sadid-1b1978358&ved=2ahUKEwjt1df7tJGOAxXwzTgGHfGqAQgQFnoECBYQAQ&usg=AOvVaw3_gQPrw9mlAAkZp4U-n1G-'>
              <BsLinkedin className='text-xl'></BsLinkedin>
            </a>
            <a href='https://github.com/safugit'>
              <BsGithub className='text-xl'></BsGithub>
            </a>
            <a href='mailto:safwan55.ah@gmail.com'>
              <CgMail className='text-2xl'></CgMail>
            </a>
          </div>
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover" href='/'>Home</a>
            <a className="link link-hover" href='/contactUs'>Contact Us</a>
            <a className="link link-hover" href='/aboutUs'>About</a>
          </nav>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;