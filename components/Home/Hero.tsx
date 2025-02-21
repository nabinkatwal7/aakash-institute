'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      className="relative flex min-h-[70dvh] flex-col items-start justify-center gap-4 p-4 text-white"
      style={{
        backgroundImage: 'url(/images/hero.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="text-center text-3xl font-extrabold md:text-4xl lg:text-5xl xl:text-7xl"
        >
          Start your global adventure today with <span className="text-[#e37712]">Aakash Institute</span> — where
          opportunity meets success!
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
