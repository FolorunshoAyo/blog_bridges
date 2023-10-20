import React from "react";
import { FiMail } from "react-icons/fi";

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <div className="bg-primary bg-opacity-50 py-5 md:py-10">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row md:items-center">
        <div className="md:w-3/4 p-4">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            <span className="text-sm tect-gray font-bold"><FiMail className='inline text-xl align-middle' /> Subscribe</span><br/> to Our Newsletter
          </h2>
          <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Enter text"
                    className="w-3/4 px-3 py-2 rounded-l focus:outline-none"
                />
                <button className="text-sm w-1/4 px-4 py-2 bg-primary bg-opacity-50 text-white rounded-r hover:bg-opacity-80 focus:outline-none">
                    Subscribe
                </button>
            </div>
        </div>

        <div className="md:w-1/4 p-4">
          <img
            src="/join.svg" // Replace with your image URL
            alt="Newsletter Image"
            className="w-36 h-36 mx-auto md:w-80 md:h-80 md:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
