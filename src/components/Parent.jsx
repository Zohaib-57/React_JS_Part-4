import React from 'react';
import Middle from './Middle';

function Parent() {
  const userName = "Muhammad Zohaib Abbas";  // Data to pass down
  return (
    <div>
      <h1 className='text-2xl border border-transparent bg-green-500 text-white'>Props Drilling Example</h1>
      <Middle userName={userName} />
    </div>
  );
}

export default Parent;
