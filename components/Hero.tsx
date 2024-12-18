import React from 'react';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 my-2 rounded-lg shadow-lg w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:tex-5xl font-extrabold text-left mb-4">
            Welcome to the Best second store in Orange County, CA
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
