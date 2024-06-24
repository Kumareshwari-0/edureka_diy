import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { auth, provider } from '../App'; // Adjust the import path accordingly
import { signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters long'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

const Authentication = ({ isLogin, setIsLogin, loggedIn, setLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [apiError, setApiError] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentDate = new Date();
      if (decodedToken.exp * 1000 > currentDate.getTime()) {
        setLoggedIn(true);
        setUsername(decodedToken.username);
      } else {
        localStorage.removeItem('token');
        setLoggedIn(false);
        setUsername('');
      }
    }
  }, [setLoggedIn,setUsername]);

  const handleLoginClick = () => {
    setIsLogin(true);
    setShowModal(true);
    reset();
  };

  const handleSignUpClick = () => {
    setIsLogin(false);
    setShowModal(true);
    reset();
  };

  const closeModal = () => {
    setShowModal(false);
    reset();
    setApiError('');
  };

  const onSubmit = async (data) => {
    const endpoint = isLogin ? 'http://localhost:8080/auth/signin' : 'http://localhost:8080/auth/signup';
    try {
      const response = await axios.post(endpoint, data);
      const { token, username } = response.data;
      localStorage.setItem('token', token);
      setUsername(username);
      setLoggedIn(true);
      closeModal();
    } catch (error) {
      setApiError(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUsername('');
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        user.getIdToken().then(token => {
          localStorage.setItem('token', token);
          setUsername(user.displayName);
          setLoggedIn(true);
          closeModal();
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Error:', errorMessage);
      });
  };

  return (
    <>
      <div className='py-2 flex justify-between gap-3 '>
        {loggedIn ? (
          <>
            <span className='text-white px-4 py-2 transition'>{username}</span>
            <button className='text-white bg-red-500 hover:bg-red-600 rounded-full px-4 py-2 transition' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className='text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 transition' onClick={handleLoginClick}>Login</button>
            <button className='text-white bg-green-500 hover:bg-green-600 rounded-full px-4 py-2 transition' onClick={handleSignUpClick}>SignUp</button>
          </>
        )}
      </div>
      {showModal && (
        <div className='fixed inset-0 flex z-10 items-center justify-center bg-gray-800 bg-opacity-75'>
          <div className='bg-white p-8 rounded-2xl shadow-lg max-w-md w-full'>
            <button className='text-gray-500 hover:text-gray-700 float-right' onClick={closeModal}>✕</button>
            <h2 className='text-2xl font-semibold mb-6 text-center'>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              {apiError && <p className='text-red-500'>{apiError}</p>}
              <div>
                <label className='block mb-2 text-gray-700'>Email:</label>
                <input
                  type="email"
                  {...register('email')}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500'
                />
                {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
              </div>
              <div>
                <label className='block mb-2 text-gray-700'>Password:</label>
                <input
                  type="password"
                  {...register('password')}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500'
                />
                {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
              </div>
              {!isLogin && (
                <div>
                  <label className='block mb-2 text-gray-700'>Confirm Password:</label>
                  <input
                    type="password"
                    {...register('confirmPassword')}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500'
                  />
                  {errors.confirmPassword && <p className='text-red-500 mt-1'>{errors.confirmPassword.message}</p>}
                </div>
              )}
              <button
                type="submit"
                className='w-full p-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition'
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <button className='bg-blue-600 w-full flex justify-evenly py-2 rounded-full text-white mt-3' onClick={handleGoogleSignIn}>
              <span className="text-2xl">
                <FaGoogle />
              </span>
              <span className='font-bold'>
                Sign In with Google
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Authentication;
