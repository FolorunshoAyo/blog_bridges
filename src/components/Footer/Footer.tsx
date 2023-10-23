import Link from "next/link";
import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-secondary text-white px-4 py-10">
      <div className="container mx-auto">
        <div className="border-b border-gray pb-4 mb-6 flex justify-between items-center">
          <div className="logo">
            {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
            <span className="text-xl md:text-2xl font-semibold">BlogBridges</span>
          </div>
          <div className="motto text-xs md:text-sm">Your Blogging Companion</div>
        </div>

        <div className="border-b border-gray py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">About Us</h3>
            <p className="mb-2 text-sm md:text-lg">About the site and mission.</p>
            <p className="mb-2 text-sm md:text-lg">123 Main St, City, Country</p>
            <p>Phone: +234 (070) 878-57141</p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Site Links</h3>
            <ul>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/about">About</Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="#">Explore</Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Categories</h3>
            <ul>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/category/tech">Technology</Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/category/lifestyle">Lifestyle</Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/category/travel">Travel</Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/category/travel">Fashion</Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary transition duration-300" href="/category/travel">Food</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-start sm:flex-row sm:justify-between sm:items-center mt-6">
          <div className="copyright text-sm mb-4 sm:mb-0">
            &copy; 2023 BlogBridges. All rights reserved.
          </div>
          <div className="social-media-icons space-x-4">
            <Link className="hover:text-primary transition duration-300" href="#">
              <FiFacebook className="inline text-lg"/>
            </Link>
            <Link className="hover:text-primary transition duration-300" href="#">
              <FiTwitter className="inline text-lg"/>
            </Link>
            <Link className="hover:text-primary transition duration-300" href="#">
              <FiInstagram className="inline text-lg"/>
            </Link>
            <Link className="hover:text-primary transition duration-300" href="#">
              <FiLinkedin className="inline text-lg"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
