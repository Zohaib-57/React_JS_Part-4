import React, { useRef } from 'react';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    console.log('Form Submitted', { email, password, confirmPassword });

    // Reset form (optional)
    event.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              className="mt-1 w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ref={emailRef}/>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="mt-1 w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ref={passwordRef}/>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              className="mt-1 w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ref={confirmPasswordRef}/>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
