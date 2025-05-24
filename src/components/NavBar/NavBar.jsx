import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { BiLogOut } from 'react-icons/bi';
import Swal from 'sweetalert2';
import ThemeChange from '../ThemeChange/ThemeChange';

const NavBar = () => {
  const {user, logOut} = use(AuthContext);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/gardeners';

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: 'Successfully Logged Out!',
          icon: 'success',
          background: '#1e1e1e',
          color: '#a0ffb0', 
          iconColor: '#00ff88', 
          confirmButtonColor: '#00c472', 
          customClass: {
            popup: 'my-swal-dark'
          }
        })
      }).catch(error => {
        console.log(error);
        Swal.fire({
          title: error.message,
          icon: 'error',
          background: '#1e1e1e',
          color: 'white', 
          confirmButtonColor: 'red', 
          customClass: {
            popup: 'my-swal-dark'
          }
        })
      })
  }

  return (
    <div className={`navbar bg-base-200 shadow-sm border-base-300 border-b ${isHomePage ? "" : "mb-20"}`}>
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
            {user ? <div className='flex flex-col'> 
              <li><NavLink to={'/shareTip'}>Share a Garden Trip</NavLink></li>
              <li><NavLink to={'/myTips'}>My Tips</NavLink></li> </div> : ""}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className='w-10 rounded-full' src="/assets/GardenLogo2.png" alt="" />
          <h1>🌿<span className='text-yellow-600'>Garden</span>Hub</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/gardeners'}>Explore Gardeners</NavLink></li>
          <li><NavLink to={'/browseTips'}>Browse Tips</NavLink></li>
          {user ? <div className='flex'> 
            <li><NavLink to={'/shareTip'}>Share a Garden Trip</NavLink></li>
            <li><NavLink to={'/myTips'}>My Tips</NavLink></li> </div> : ""}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeChange></ThemeChange>
        {user ? <div>
          <div className="avatar group relative flex flex-col items-center">
            <div className="w-12 rounded-full hover:cursor-pointer">
              <img src={user.photoURL} referrerPolicy="no-referrer"/>
            </div>
            <div className='group-hover:opacity-100 opacity-0'>
              <p className='absolute top-16 right-0 bg-base-200 p-1 rounded-xl truncate'>{user.displayName}</p>
              <button className='btn btn-error absolute top-25 right-0' id='logoutBtn' onClick={handleSignOut}>LogOut <BiLogOut></BiLogOut></button>
            </div>
          </div>
        </div> : <Link className="btn btn-info" to={'/login'}>Login</Link>}
      </div>
    </div>
  );
};

export default NavBar;