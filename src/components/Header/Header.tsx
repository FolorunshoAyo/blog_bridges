"use client"
import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiMenu } from "react-icons/fi";

type Props = {};

export default function Header({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white-900 shadow-md p-4 border-b-2 border-primary z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <Image src="" alt="Logo" className="h-8 w-8 mr-2" /> */}
          <span className="text-2xl font-semibold">BlogBridges</span>
        </div>
        <ul className="hidden md:flex text-sm space-x-6">
          <li>
            <Link href="#" className="hover:text-primary transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary transition duration-300">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary transition duration-300">
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white rounded-lg font-semibold p-4 bg-primary"
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="block md:hidden">
            <button
            className="p-2"
            onClick={toggleMenu}
          >
            <FiMenu className="w-5 h-5" />
          </button>
        </div>
        <div
        className={`z-50 bg-white fixed top-0 right-0 h-full w-0 shadow-lg transition-all duration-300 transform ${
          menuOpen ? 'w-64' : 'w-0'
        }`}
      >
        <div className="my-2 px-4 text-end">
          <button
            className="bg-transparent border-0 text-4xl"
            onClick={closeMenu}
          >
            &times;
          </button>
        </div>
      
        <nav className="pt-10 pl-4">
          <ul>
            <li className="mb-4">
              <Link href="#" className="hover:text-primary transition duration-300">
                Home <FiChevronRight className="inline align-middle" />
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:text-primary transition duration-300">
                About <FiChevronRight className="inline align-middle" />
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:text-primary transition duration-300">
                Explore <FiChevronRight className="inline align-middle" />
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact" className="hover:text-primary transition duration-300">
                Contact <FiChevronRight className="inline align-middle" />
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:text-primary transition duration-300">
                Sign In
              </Link>
            </li>
            <li className="mt-6">
              <Link
                href="#"
                className="text-white rounded-lg font-semibold py-2 px-4 bg-primary"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </nav>
    </header>
  );
}
