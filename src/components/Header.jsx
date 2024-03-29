"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

export default function Header() {
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUserInfo(userData);
    }

    const handleStorageChange = () => {
      const userData = localStorage.getItem("userData");
      setUserInfo(userData ? JSON.parse(userData) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="shadow bg-[#0071dc]">
      {/* For small screens: Show simplified header */}
      <div className="flex flex-col sm:hidden max-w-6xl mx-2 sm:mx-auto py-2">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center">
            {/* <div className="p-2 hover:bg-gray-500 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div> */}
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/" passHref>
              <h2 className="text-xl font-bold ml-2 cursor-pointer">
                Zaafmart
              </h2>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="justify-end indicator mx-2 hover:bg-gray-500 rounded-full cursor-pointer"
            onClick={()=>{router.push('/cart')}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">81</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          {/* SearchBar in new row */}
          <SearchBar />
        </div>
      </div>

      {/* For larger screens: Show full header with search bar */}
      <div className="hidden sm:flex justify-between items-center max-w-6xl mx-2 sm:mx-auto py-2">
        <div className="flex justify-between items-center text-white">
        <div className="flex items-center">
            {/* <div className="p-2 hover:bg-gray-500 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div> */}
            <div className="drawer">
              <input id="my-drawer-web" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-web"
                  className="btn btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer-web"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/" passHref>
              <h2 className="text-xl font-bold ml-2 cursor-pointer">
                Zaafmart
              </h2>
            </Link>
          </div>
          <div className="ml-10">
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-6 py-2 border-2 border-yellow-400 text-white font-medium text-xs uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none transition duration-150 ease-in-out"
            type="button"
          >
            LOGIN
          </button>
          <div className="indicator mx-2 text-white hover:bg-gray-500 p-1 rounded-full cursor-pointer"
          onClick={()=>{router.push('/cart')}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
