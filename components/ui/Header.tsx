// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-2 shadow-xl">
      <Link href="/">
        {/* <Image src="/logo.png" alt="logo" width={200} height={200} className="w-40" /> */}
        <p>logo</p>
      </Link>
      {/* <div className="hidden lg:flex">links</div> */}
      <Link
        target="_blank"
        href="https://facebook.com"
        className="rounded-lg bg-[#e37712] px-4 py-2 font-bold text-white"
      >
        Consult with us
      </Link>
    </div>
  );
};

export default Header;
