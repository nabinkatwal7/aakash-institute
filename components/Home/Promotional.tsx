import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const promotionalData = [
  {
    id: 1,
    title: '1000+',
    description: 'Admissions Granted',
    image: '/assets/admission.svg',
  },
  {
    id: 2,
    title: '500+',
    description: 'Scholarships Achieved',
    image: '/assets/scholarship.svg',
  },
  {
    id: 3,
    title: '1500+',
    description: 'Visa Granted',
    image: '/assets/visa.svg',
  },
];

const Promotional = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 lg:px-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-semibold text-gray-800">Our Winning Record</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          No tall claims, we back the efficiency of our consultancy with stats. Check for yourselves!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {promotionalData.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center gap-2">
            <Image src={item.image} alt="stats" width={200} height={200} className=" min-h-[250px]" />
            <div className="flex flex-col items-center justify-center ">
              <p className="text-3xl">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/contact" className="rounded-lg bg-[#e37712] px-4 py-2 font-bold text-white">
        Start Your Journey With Us
      </Link>
    </div>
  );
};

export default Promotional;
