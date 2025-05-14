import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <div className="bg-black w-full m-auto">
      <div className="container m-auto px-4 py-8 max-w-4xl bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center sm:w-full">
          <div>
            <h1 className="font-extrabold text-2xl">Umar portfolio</h1>
          </div>
          <div>
            <ul className="flex gap-10">
              <li>
                <Link
                  className="text-gray-500 hover:text-cyan-500 cursor-pointer"
                  href="/"
                >
                 <div className="relative inline-flex group">
  <div
    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full blur-lg"
  ></div>

  <a
    href="#"
    title="Home"
    className="relative inline-flex items-center justify-center  bg-transparent transition-all duration-200 font-pj rounded-full  focus:ring-gray-900"
    role="button"
  >
    Home
  </a>
</div>


                  {" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-cyan-500 cursor-pointer"
                  href="/portfolio"
                >
                  <div className="relative inline-flex group">
  <div
    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full blur-lg"
  ></div>

  <a
    href="#"
    title="Home"
    className="relative inline-flex items-center justify-center  bg-transparent transition-all duration-200 font-pj rounded-full  focus:ring-gray-900"
    role="button"
  >
    Portfolio
  </a>
</div>
                  
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-cyan-500 cursor-pointer"
                  href="/projects"
                >
                  <div className="relative inline-flex group">
  <div
    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full blur-lg"
  ></div>

  <a
    href="#"
    title="Home"
    className="relative inline-flex items-center justify-center  bg-transparent transition-all duration-200 font-pj rounded-full  focus:ring-gray-900"
    role="button"
  >
    Projects
  </a>
</div>
                 
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-cyan-500 cursor-pointer"
                  href="/contact"
                >
                  <div className="relative inline-flex group">
  <div
    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full blur-lg"
  ></div>

  <a
    href="#"
    title="Home"
    className="relative inline-flex items-center justify-center  bg-transparent transition-all duration-200 font-pj rounded-full focus:ring-gray-900"
    role="button"
  >
      Contact{" "}
  </a>
</div>
                 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
