// src/Signup.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  
  
  const [inputs, setInputs] = useState({
    fullName: '',
    username :'',
    password: '',
    confirmPassword :'',
    gender: '',
  })

  const { loading , signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="male"
                name="gender"
                value="male"
                onChange={(e) => setInputs({...inputs, gender: e.target.value})}
                className="h-4 w-4 text-indigo-600"
              />
              <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="female"
                name="gender"
                value="female"
                onChange={(e) => setInputs({...inputs, gender: e.target.value})}
                className="h-4 w-4 text-indigo-600"
              />
              <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
        </button>
      </form>
      <span className='text-gray-700'>Already have an account ? </span>
      <Link to='/login' className='text-gray-700'> Login</Link>
    </div>
  );
};

export default Signup;
