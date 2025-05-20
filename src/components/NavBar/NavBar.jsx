import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200  z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/gardeners'}>Explore Gardeners</NavLink></li>
            <li><NavLink to={'/browseTips'}>Browse Tips</NavLink></li>
            <li><NavLink to={'/shareGarden'}>Share a Garden Trip</NavLink></li>
            <li><NavLink to={'/myTips'}>My Tips</NavLink></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <h1>🌿<span className='text-yellow-600'>Garden</span>Hub</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/gardeners'}>Explore Gardeners</NavLink></li>
          <li><NavLink to={'/browseTips'}>Browse Tips</NavLink></li>
          <li><NavLink to={'/shareGarden'}>Share a Garden Trip</NavLink></li>
          <li><NavLink to={'/myTips'}>My Tips</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;