import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted', { email, password });
    setIsSubmitted(true);
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-green-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-green-600">Login</h1>

        {isSubmitted && (<p className="text-center text-green-700 bg-green-100 p-2 rounded-md">Login Successful!</p>)}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="text" 
              id="email" 
              placeholder="Enter email" 
              className="mt-1 w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={email}
              onChange={handleEmailChange}  />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              className="mt-1 w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={password}
              onChange={handlePasswordChange} />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-800 transition duration-300">Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
