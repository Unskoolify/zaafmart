"use client";
import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { MdShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      setUserInfo(userData);
    }

    const handleStorageChange = () => {
      const userData = localStorage.getItem('userData');
      setUserInfo(userData ? JSON.parse(userData) : null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="shadow bg-[#0071dc]">
      <div className="flex justify-between items-center max-w-6xl mx-2 sm:mx-auto py-2">
        <Link href="/" passHref>
          <h2 className="text-2xl font-bold text-white cursor-pointer">Zaafmart</h2>
        </Link>
        <SearchBar />
        <div className="flex items-center gap-2">
          <button
            className="px-6 py-2 border-2 border-yellow-400 text-white font-medium text-xs uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none transition duration-150 ease-in-out"
            type="button"
          >
            LOGIN
          </button>
          <MenuItem title="My Cart" address="/cart" Icon={MdShoppingCart} />
        </div>
      </div>
    </div>
  );
}
