import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

export default function ProfileMenu({}: Props) {
const [menuOpen, setMenuOpen] = useState(false);
  const userName = "John Doe"; // Replace with the user's actual name

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button
        className="py-2 pr-4 w-full flex items-center justify-between"
        onClick={toggleMenu}
      >
        <div className='flex items-center'>
            <img
            src="/user-avatar.png" // Replace with the user's avatar image URL
            alt="User Avatar"
            className="w-8 h-8 rounded-full align-middle"
            />
            <span className="ml-2 text-sm text-black">{userName}</span>
        </div>
        <span className='ml-2 bg-secondary text-white text-base py-1 px-2 rounded-sm shadow-sm'>Reader</span>
      </button>

      {menuOpen && (
        <div className="z-50 absolute left-0 mt-2 w-40 bg-white border border-gray rounded shadow-lg text-sm text-md">
          <ul>
            <li className="px-2 py-1 border-b border-gray hover:bg-primary hover:bg-opacity-80 hover:text-white transition duration-500 cursor-pointer">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="px-2 py-1 hover:bg-primary hover:bg-opacity-80 hover:text-white transition duration-500 cursor-pointer">
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}