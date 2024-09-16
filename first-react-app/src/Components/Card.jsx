import React from 'react';

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200 relative'>
      <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover' src='https://media.kasperskydaily.com/wp-content/uploads/sites/36/2020/11/24171234/amazon-related-phishing-scam-featured.jpg' alt='Amazon Phishing Scam' />
        </div>
        <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>Amazon Basics</h2>
          <p className='text-xs mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
