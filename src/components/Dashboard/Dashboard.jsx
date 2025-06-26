// import React, { use } from 'react';
import { Link, Outlet, useNavigation } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';
import { BiMenu } from 'react-icons/bi';

const Dashboard = () => {
  // const {user} = use(AuthContext);
  const navigation = useNavigation();

  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className="btn btn-primary btn-circle drawer-button md:hidden btn-ghost text-3xl mb-4">
          <BiMenu></BiMenu>
        </label>
        {navigation.state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 text-lg">
          <h1 className='text-center italic text-3xl'>DASHBOARD</h1>
          <div className='divider divider-vertical mt-0 mb-1'></div>
          <li><Link to={''}>Add Marathon</Link></li>
          {/* <li><Link to={`myMarathons/${user.email}`}>My Marathons</Link></li>
          <li><Link to={`myApplications/${user.email}`}>My Apply List</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
