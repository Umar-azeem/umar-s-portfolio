"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

export default function Main() {
   
  return (
    <div className="max-w-4xl m-auto relative">
      <main className="relative mt-28">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-bold text-4xl">Hello, i{"’"}m Umar Azeem</h1>
              <h1 className="font-bold text-4xl mt-1 gradiant-text  text-cyan-500">
  <Typewriter
    words={['front-end developer']}
    cursor
    cursorStyle="_"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</h1>
              <p className="mt-4 text-gray-400 hover:text-cyan-500">
                Former digital-marketing specialist, seeking to apply competent{" "}
                <br />
                development skills with focus on collaboration, communication,
                <br />
                and passion
              </p>
              <div className="relative inline-flex mt-5 group">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a href="#" title="Get quote now"
            className="relative text-gray-500 hover:text-cyan-500 cursor-pointer inline-flex items-center justify-center px-8 py-4 text-lg font-samibold transition-all duration-200 bg-gray-950 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"><a
            href="https://drive.google.com/file/d/1oqGi7DXULYdTi0rvi5omf_M8ez5gxLz1/view?usp=sharing"
            target="_blank"
          >
            
            Download resume
          </a>
        </a>
    </div>
              
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-[220px] h-[220px] m-auto">
              <div className="relative inline-flex group">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
       
            
            <Image
                  src="/assets/imag/umer.png"
                  alt="App"
                  className="relative z-10 rounded-full w-[150px] m-auto sm:w-[150px]"
                  width={150}
                  height={150}
                />
    </div>
               
                <Image
                  src="/assets/imag/small.png"
                  alt="App1"
                  className="absolute top-[-10px] left-14 z-0 m-auto sm:w-[220px]"
                  width={200}
                  height={200}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      
      </main>
    </div>
  );
}
