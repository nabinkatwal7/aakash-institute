import Link from 'next/link';
import React from 'react';

const Description = () => {
  return (
    <section className=" px-6 py-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-semibold text-gray-800">Unlock Your Future with Global Opportunities</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Greetings from Aakash Institute, where we turn your aspirations of studying, working, or living abroad into
          reality. We aim to deliver precise information, expert services, and comprehensive insights into global
          opportunities. Whether you want to do more schooling, enhance your job status, or begin a new journey, you get
          the assistance and directive required here. Language courses and test preparation, and entrance preparations
          abroad study consultancy– everything to assist you in succeeding
        </p>
        {/* <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Whether you are looking to pursue higher education, explore new career opportunities, or experience life in a
          different country, we provide the support and resources you need to make informed decisions and succeed in
          your endeavors.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Join the thousands of satisfied clients who have turned their aspirations into reality with our help. Your
          global adventure starts here.
        </p> */}
        <div className="mt-4">
          <Link className="rounded-lg bg-[#e37712] px-4 py-2 font-bold text-white" href="/about">
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Description;
