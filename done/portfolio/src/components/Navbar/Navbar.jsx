import React from 'react'
import { Home, User, FolderOpen, Code2, Mail } from 'lucide-react';

function Navbar() {
  return (
     <div className="w-full flex justify-center mt-8">
      <div className="bg-white shadow-md rounded-full px-3 py-2 flex items-center gap-3 border">

      
        <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full transition">
          <Home size={18} />
          <span>Home</span>
        </button>

       
        <button className="flex items-center gap-2 px-5 py-2 rounded-full hover:bg-gray-100 transition">
          <User size={18} />
          <span>About</span>
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-full hover:bg-gray-100 transition">
          <FolderOpen size={18} />
          <span>Projects</span>
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-full hover:bg-gray-100 transition">
          <Code2 size={18} />
          <span>Links</span>
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-full hover:bg-gray-100 transition">
          <Mail size={18} />
          <span>Contact</span>
        </button>

      </div>
    </div>
  )
}

export default Navbar