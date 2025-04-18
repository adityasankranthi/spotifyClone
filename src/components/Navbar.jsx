import React from 'react';
import logo from '../assets/logo.svg';
import home from '../assets/home.svg';
import search from '../assets/search.svg';
import { Download } from 'lucide-react';
import { useEffect, useState } from "react";
import { getAccessTokenFromURL } from '/utils/getToken';

const Navbar = () => {
  const navItems = [
    { text: 'Premium', width: 'w-[67px]' },
    { text: 'Support', width: 'w-[61px]' },
    { text: 'Download', width: 'w-[77px]' },
  ];

  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = getAccessTokenFromURL();
    if (accessToken) {
      setToken(accessToken);
      window.history.pushState({}, null, "/"); // Clean URL
    }
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:4000/login";
  };

  return (
    <header className="w-full h-16 bg-black flex items-center justify-between px-7 text-white">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <button className="h-7 w-auto">
          <img src={logo} alt="Logo" className="h-full w-full hover:opacity-80 transition duration-200" />
        </button>

        {/* Home Icon */}
        <button className="h-10 w-auto rounded-full flex">
          <img src={home} alt="Home" className="h-full w-full hover:opacity-80 transition duration-200" />
        </button>

        {/* Search Bar */}
        <div className="relative h-10 w-[474px] bg-[#1f1f1f] rounded-full flex items-center px-4">
          <button>
            <img src={search} alt="Search" className="h-5 w-5 mr-3" />
          </button>
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-[#b3b3b3] placeholder-[#b3b3b3] outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Nav Items */}
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`h-12 ${item.width} rounded-full text-sm font-bold text-[#b3b3b3] hover:text-white transition`}
          >
            {item.text}
          </button>
        ))}

        {/* Separator */}
        <div className="h-[25px] w-[1px] bg-white mx-2" />

        {/* Install App */}
        <button className="h-8 w-[121px] rounded-full flex items-center gap-2 hover:bg-white/10 px-4 transition">
          <Download className="h-4 w-4 text-[#b3b3b3]" />
          <span className="text-[12px] font-bold text-[#b3b3b3]">Install App</span>
        </button>

        {/* Sign Up */}
        <button className="h-8 w-[72px] rounded-full hover:bg-white/10 transition text-[13px] font-bold text-[#b3b3b3]" onClick={handleLogin}>
          Sign up
        </button>

        {/* Log In */}
        <button className="h-12 w-[108px] rounded-full bg-white text-black font-bold hover:bg-white/90 transition" onClick={handleLogin}>
          Log in
        </button>
      </div>
    </header>
  );
};

export default Navbar;
