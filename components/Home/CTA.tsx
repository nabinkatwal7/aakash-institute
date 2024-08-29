import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <section className="bg-[#e37712] px-6 py-12 text-center text-white lg:px-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold">Ready to Take the Next Step?</h2>
        <p className="mb-8 text-lg">
          Start your journey towards a brighter future today. Get personalized guidance and expert advice from our
          experienced consultants. We are here to help you succeed.
        </p>
        <Link
          href="https://facebook.com"
          className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-[#e37712] shadow transition duration-300 hover:bg-gray-100"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default CTA;
