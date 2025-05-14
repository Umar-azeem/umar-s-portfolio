'use client'
import React from "react";
import { Card } from "../../components/Card"; 

const data = [
  { id: 1, 
    name: "WeatherApp",
    image: "/assets/imag/wa.png",
    dicription:"Built this weather app with Next.js as part of my frontend showcase — real-time data, client-side rendering",
    live:"https://weatherweb1app.netlify.app/",
    github:"https://github.com/Umar-azeem/cards-github.io",
    
   },
    { id: 2, 
    name: "Kanban",
    image: "/assets/imag/kb.png",
    dicription:"As a frontend developer, I created this Kanban app to organize tasks visually with drag-and-drop support.",
    live:"https://kaanban-board.netlify.app/",
    github:"https://github.com/Umar-azeem/invoices.git",
   },
   { id: 3, 
    name: "Devlink",
    image: "/assets/imag/dl.png",
    dicription:"As a frontend developer, I built this invoice app to streamline billing with dynamic forms and real-time calculations.",
    live:"https://dev-linked.netlify.app/",
    github:"https://github.com/Umar-azeem/devlink.git-io.git",
   },
   { id: 4, 
    name: "Invoices",
    image: "/assets/imag/in.png",
    dicription:"As a frontend developer, I built this invoice app to streamline billing with dynamic forms and real-time calculations.",
    live:"https://melodic-gumdrop-8cf605.netlify.app/",
    github:"https://github.com/Umar-azeem/invoices",
   },
  
];

export default function Page() {
  return (
    <div className="bg-transparent flex justify-center items-center container mx-auto lg:p-0">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 ">
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            rotationIntensity={20}
            glareIntensity={0.4}
            dicription={item.dicription}
            live={item.live}
            github={item.github}
            className="border bg-black/80 text-white p-4"
            borderRadius="1rem"
          />
        ))}
      </div>
    </div>
  );
}
