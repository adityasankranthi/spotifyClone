import React from "react";
import SVG from "../assets/SVG.svg";
import globe from "../assets/globe.svg";
import plus from "../assets/plus.svg";

const sidebarCards = [
  {
    title: "Create your first playlist",
    description: "It's easy, we'll help you",
    buttonText: "Create playlist",
  },
  {
    title: "Let's find some podcasts to follow",
    description: "We'll keep you updated on new episodes",
    buttonText: "Browse podcasts",
  },
];

const footerLinks = [
  "Legal",
  "Safety & Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Accessibility",
  "Notice at Collection",
];

const Sidebar = () => {
  return (
    <div className="relative w-[350px] h-auto bg-[#222222] rounded-lg overflow-hidden ">
      <div className="h-full bg-[#121212] rounded-lg overflow-y-scroll">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 mb-8">
          <h2 className="text-white text-[15px] font-bold">Your Library</h2>
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center">
            <img src={plus} alt="Add" className="w-auto h-8" />
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4 px-2 "> {/* Add mb-10 */}
          {sidebarCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-lg p-4 w-full text-white"
            >
              <h3 className="font-bold text-[15px]">{card.title}</h3>
              <p className="text-sm mb-4">{card.description}</p>
              <button className="bg-white text-black text-[13px] font-bold px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:scale-105 hover:bg-[#f0f0f0]">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 px-4 py-4">
            <div className="mt-6 px-4 py-4 space-y-2 text-[10.5px] text-[#b3b3b3]">
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {footerLinks.map((link, index) => (
                <span key={index} className="whitespace-nowrap">
                    {link}
                </span>
                ))}
            </div>
            <img src={SVG} alt="Logo" className="w-6 h-6 mt-2" />
            <div className="text-white mt-2 text-xs">Cookies</div>
            <button className="mt-3 border border-[#7c7c7c] text-white text-[13px] font-bold px-4 py-1 rounded-full flex items-center gap-2">
                <img src={globe} alt="Language Icon" className="w-4 h-4" />
                English
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
