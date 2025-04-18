import React from 'react';

const Signupbar = () => {
  return (
    <div className="w-screen h-[66px] bg-black flex items-center justify-between px-6 [background:linear-gradient(90deg,rgba(175,40,150,1)_0%,rgba(80,155,245,1)_100%)]">
      <p className="text-white [font-family:'Inter-Regular',Helvetica] text-sm max-w-[600px] leading-snug">
        <span className="font-bold text-base">
          Preview of Spotify
          <br />
        </span>
        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
      </p>

      <button className="h-12 px-6 bg-white text-black font-bold rounded-full text-[15px] hover:bg-gray-200 transition hover:scale-105 hover:bg-[#f0f0f0]" onClick={() => window.location.href = 'http://localhost:4000/login'}>
        Sign up free
      </button>
    </div>
  );
};

export default Signupbar;
