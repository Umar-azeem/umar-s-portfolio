import Conpage from "../components/Conpage";
import React, { useEffect, useState } from "react";
import app from "../imag/umer.png";
import um from "../imag/um.png";
import Image from "next/image";

function Contact() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <section className="flex flex-col lg:flex-row gap-10 mt-11 items-center justify-center">
          {/* Left Side Image */}
          <div className="mt-14 flex justify-center w-full lg:w-1/2">
            <Image
              src={um}
              alt="Avatar"
              width={200}
              height={200}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full shadow-md object-cover"
            />
          </div>

          {/* Right Side Contact Card */}
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-lg text-center w-full max-w-md">
              <Image
                src={app}
                alt="Avatar"
                width={128}
                height={128}
                className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-6 shadow-md object-cover"
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base text-white mb-6">
                I’d love to hear from you! Click the button below to send me an
                email.
              </p>
              <a
                href="mailto:umara4436@gmail.com"
                className="inline-block text-white bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Optional: Extra Content Component */}
        <div className="mt-12">
          <Conpage />
        </div>

        {/* Scroll to Top Button */}
        {scrolling && (
          <button
            className="fixed z-50 right-6 bottom-6 sm:right-8 sm:bottom-8 w-14 sm:w-20 transition-transform hover:scale-110"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/assets/imag/arrow-down.svg"
              alt="Arrow Up"
              width={100}
              height={100}
            />
          </button>
        )}
      </div>
    </>
  );
}

export default Contact;
