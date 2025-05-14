'use client'
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};


  const handleSubmit = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:umara4436@gmail.com?subject=Contact from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className=" max-w-4xl mx-auto p-6">
       
      <section className="flex flex-col items-center gap-10 mt-11">
      
        <div className="bg-white/10 bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-lg text-center w-full max-w-md">
        
          <h1 className="text-3xl font-semibold text-white mb-4">Contact Me</h1>
          <form onSubmit={()=>handleSubmit} className="space-y-4">
           <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-black/95 text-cyan-500 focus:outline-none"
              required
            /> 
            </div>
                       <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-black/95 text-cyan-500 focus:outline-none"
              required
            /></div>
                                   <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]">

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-black/95 text-cyan-500 focus:outline-none"
              required
            />
            </div>

            <div className="relative inline-flex mt-5 group">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
       <button
              type="submit"
            className="relative text-gray-500 hover:text-cyan-500 cursor-pointer inline-flex items-center justify-center px-8 py-4 text-lg font-samibold transition-all duration-200 bg-gray-950 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Send Message
            </button>
    </div>
            
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
