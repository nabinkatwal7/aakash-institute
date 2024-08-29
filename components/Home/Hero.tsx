import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative flex min-h-[50dvh] flex-col items-start justify-center gap-4 p-4 text-white"
      style={{
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex">
        <p className="text-center text-3xl font-extrabold md:text-4xl lg:text-5xl xl:text-7xl">
          Your Gateway to <span className="text-[#e37712]">Global Opportunities</span> : Guiding You Every Step of the
          Way
        </p>
      </div>
    </div>
  );
};

export default Hero;
