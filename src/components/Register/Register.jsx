/* eslint-disable no-unused-vars */
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, updateNamePhoto, signInWithGoogle, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const [name, email, photoURL, password] = [formData.get('name'), formData.get('email'), formData.get('photoURL'), formData.get('password')];
    console.log(name, email, photoURL, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        form.reset();
        Swal.fire({
          title: 'Successfully Registered!',
          icon: 'success',
          background: '#1e1e1e',
          color: '#a0ffb0', 
          iconColor: '#00ff88', 
          confirmButtonColor: '#00c472', 
          customClass: {
            popup: 'my-swal-dark'
          }
        })
        navigate('/');
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
        });
        navigate('/');
      })
  }

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: 'Successfully Logged In!',
          icon: 'success',
          background: '#1e1e1e',
          color: '#a0ffb0', 
          iconColor: '#00ff88', 
          confirmButtonColor: '#00c472', 
          customClass: {
            popup: 'my-swal-dark'
          }
        })
        navigate('/');
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
        navigate('/');
      })
  }

  return (
    <div className='w-full mx-auto flex justify-center'>
      <form onSubmit={handleSignUp}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />

          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" name='photoURL' />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' />

          <button className="btn btn-neutral mt-4 mb-2" type='submit'>Register</button>
          <button className="btn bg-white text-black border-[#e5e5e5]" type='button' onClick={handleGoogleSignUp}>
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
          <Link to={'/login'} className='underline mt-2 text-white'>Already have an account?</Link>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;