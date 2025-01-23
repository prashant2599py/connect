import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading , login} = useLogin();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username, password);
    // Clear form field
    setUsername('');
    setPassword('');
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
  

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>


        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loading ? <span className='loading loading-spinner'></span> : "Login"}
        </button>
        <span className='mr-2'>Do not have an account ? </span>
        <Link to='/signup'>Signup</Link>
      </form>
    </div>
  );
};

export default Login;
