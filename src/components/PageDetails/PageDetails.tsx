import Link from "next/link";
import React from "react";

type Props = {
  pageName: string;
  pageDescription: string;
};

export default function PageDetails({ pageName, pageDescription }: Props) {
  return (
    <section className="bg-primary bg-opacity-60 pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-2xl text-white md:text-3xl capitalize font-bold">
           {pageName}
        </h1>
        <div className="mt-5 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="w-full md:w-1/2 text-secondary text-xs mb-4 md:text-sm leading-5">
            {pageDescription}
          </p>
          <div className="text-sm">
            <Link className="hover:text-secondary transition duration-300" href="/">
                Home
            </Link>
            {" "}
            <span className="text-gray-light">
                &gt; {pageName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
