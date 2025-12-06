import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-gray-900 z-50">
          SARAN<span className="text-gray-500">DEVELOPERS</span>
        </Link>

        {/* DESKTOP MENU (Hidden on mobile) */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide font-medium">
          <Link to="/" className="text-gray-900 hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link to="/portfolio" className="text-gray-900 hover:text-amber-600 transition-colors">
            Portfolio
          </Link>
          <Link to="/insights" className="text-gray-900 hover:text-amber-600 transition-colors">
            Insights
          </Link>
          <Link to="/contact" className="text-gray-900 hover:text-amber-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden z-50 text-gray-900 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 text-xl font-bold uppercase tracking-widest md:hidden">
             <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-amber-600">Home</Link>
             <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-amber-600">Portfolio</Link>
             <Link to="/insights" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-amber-600">Insights</Link>
             <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-amber-600">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
