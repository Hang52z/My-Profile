// src/components/Navbar.jsx
import React from 'react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-slate-200 shadow-sm z-10">
    <div className="container mx-auto flex items-center justify-between py-6 px-6">
      <a href="#home" className="text-2xl font-bold">Hang Zhao</a>
      <ul className="flex space-x-6">
        {navItems.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-gray-900">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;