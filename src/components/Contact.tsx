import Conpage from "../src/app/Conpage";
import React from "react";
import app from "../imag/umer.png";
import { useEffect, useState } from "react";
import um from "../imag/um.png";
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
      <div className="max-w-4xl m-auto relative">
        <section className="flex flex-col sm:flex-row gap-10 mt-11">
          <div className="container mt-14  flex justify-center">
            <img
              src={um}
              className="mx-auto w-full h-full rounded-full mb-6 shadow-md"
            ></img>
          </div>
          <div className="flex items-center justify-center  flex-col h-screen w-screen bg-gradient-to-r ">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-lg text-center max-w-md w-fit sm:w-full">
              <img
                src={app} // Replace with your image URL
                className="mx-auto w-32 h-32 rounded-full mb-6 shadow-md"
              />
              <h1 className="text-3xl font-semibold text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-white mb-6">
                I’d love to hear from you! Click the button below to send me an
                email.
              </p>
              <a
                href="mailto:umara4436@gmail.com"
                className="inline-block text-white bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 font-semibold py-3 px-6 rounded-lg "
              >
                Contact Me
              </a>
            </div>
            <div>
              <Conpage />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Contact;
