// pages/login.js
"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /home
    router.push('/home');
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/850e/4153/42a513e4e1c22278a91fcee8c0e476ae?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LzZPTP6Wf-5ijspYh~X3EBaaJQ1XPT7VA8ovnUzysW3nNrApR1xV12FZmojKFytkY2FITnnEo~x-pelyNH~1q6LL2dfqIYIRo55lYRsQZKAiJVq5tONuZuOyYyVU2qkwFK7knpq0ggtkyAy3kL9~i9Cgog6ZS8Cb4H4Mw~-gkWpzJ31qFxP9RgwPESDrxPMyR5dI38ojih4MxThNmzkNWNfteA0g~lxZ0v3OuFpIVNIyqg3xwNLOg15xhoHKVqs-kraD6qMjImxOQ3Bfh~L5K9d7VwklIMNGrmrMBx6oBuWWTid3X4b9nKvelwh7xLk3vIuKhZkOtTttwGZMFwNLdQ__')" }}
    >
        
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
            <h1 className='text-sm '>This is a dummy login page give any username and password</h1>
            Login
            </h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
