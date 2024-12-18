'use client';

import React, { useEffect, useState } from 'react';
import Form from 'next/form';
import Link from 'next/link';
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import { TrolleyIcon, PackageIcon } from '@sanity/icons';
import useBasketStore from '@/store/store';

function Header() {
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a placeholder
  }

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2 sticky top-0 bg-white border-b border-gray-100 z-10">
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link href="/">Logo</Link>
        <Form
          action="search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="search for products"
            className="bg-gray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/cart"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span>My Cart</span>
          </Link>

          <ClerkLoaded>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 text-blue-500 hover:text-white hover:bg-blue-700 font-bold py-2 px-4 rounded border border-blue-500 hover:border-blue-700"
              >
                <PackageIcon className="w-6 h-6" />
                <span>My Orders</span>
              </Link>

              {user ? (
                <div className="flex items-center sm:block text-sm">
                  <UserButton />

                  <div className="hidden sm:block text-xs">
                    <p className="text-gray-400">Welcome Back</p>
                    <p className="font-bold">{user.fullName}!</p>
                  </div>
                </div>
              ) : (
                <SignInButton mode="modal" />
              )}
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
