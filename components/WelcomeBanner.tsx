'use client';

import React from 'react';

const WelcomeBanner = () => {
  const title = 'Welcome to our Online Store';
  const subtitle = "Orange County's Premier Second-Hand Boutique";
  const ctaText = 'Start Exploring below';

  const scrollToProducts = () => {
    // You can replace 'products' with the ID of the section you want to scroll to
    const productsSection = document.getElementById('product-view');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
            {title}
          </h2>
          <p className="text-left text-xl sm:text-3xl font-semibold mb-6">
            {subtitle}
          </p>
          <div className="flex">
            <button
              onClick={scrollToProducts}
              className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300 cursor-pointer"
            >
              <span className="ml-2 font-bold text-base sm:text-xl">
                {ctaText}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
