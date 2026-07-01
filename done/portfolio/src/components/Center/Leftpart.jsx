
import React from "react";
import { MapPin, Briefcase, Download } from "lucide-react";

function Leftpart() {
  return (
    <div className="w-5/7 h-screen flex flex-col justify-center px-12">

      {/* Availability Badge */}
      <div className="inline-flex w-fit items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        Available for Internship
      </div>

      {/* Heading */}
      <div className="mt-8">
        <h1 className="text-7xl font-black leading-tight">
          Hi, I'm <br />
          <span>Om Sambherao</span>
        </h1>
      </div>

      {/* Role */}
      <div className="mt-5">
        <h2 className="text-4xl font-bold">
          Full Stack Developer | DSA
        </h2>
      </div>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-8">
        I'm an IIT (BHU) Varanasi student passionate about Full Stack
        Development, Data Structures & Algorithms, and building scalable,
        user-centric web applications. I enjoy solving complex problems and
        creating modern digital experiences.
      </p>

      {/* Location */}
      <div className="flex items-center gap-8 mt-8 text-gray-700">

        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <span>Varanasi, India</span>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={20} />
          <span>Open to Opportunities</span>
        </div>

      </div>

   <hr className="mt-5"/>
      {/* Buttons */}
      <div className="flex gap-5 mt-10">


        <button className="bg-black text-white px-7 py-4 rounded-full font-semibold hover:bg-gray-800 transition">
          about me 
        </button>

        <button className="flex items-center gap-2 border-2 border-black px-7 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition">
          <Download size={18} />
          Download CV
        </button>

      </div>

    </div>
  );
}

export default Leftpart;