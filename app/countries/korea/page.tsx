import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-pink-200 px-10 py-16 text-center text-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Study In South Korea</h1>
        <p className="mb-6 text-lg">
          South Korea offers world-class education with cutting-edge technology and a rich culture. Aakash Institute
          provides total support for students wishing to study in this vibrant country.
        </p>
        <button className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700">Explore More</button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 rounded-lg bg-white p-8 shadow-lg">
        <img src="/hero.jpg" alt="Japan" className="mb-6 h-64 w-full rounded-md object-cover" />

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Study in South Korea?</h2>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          <li>
            World-Class Education: South Korean universities are recognized for their programs in engineering,
            technology, business, medical, and humanities.
          </li>
          <li>
            Cutting-Edge Technology and Innovation: Students have the opportunity to study in an innovative environment
            with up-to-date technologies.
          </li>
          <li>
            Cultural Richness: South Korea blends traditionalism and contemporaneity, making it an engaging place for
            students.
          </li>
          <li>
            Affordable Education and Scholarships: Education is relatively cheap with high quality, and many scholarship
            programs are available for international students.
          </li>
          <li>
            Career Opportunities: Students have access to internships, work placements, and job offers after completing
            their studies due to South Koreas fast-rising economy.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Support for Studying in South Korea</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-600">
          <li>
            University and Course Selection: Assistance in selecting universities and programs that suit your passions
            and career plans.
          </li>
          <li>
            Application Process: Help with completing and submitting applications to meet university requirements.
          </li>
          <li>
            Visa Application Support: Guidance in obtaining your student visa and ensuring the correctness of all
            completed documents.
          </li>
          <li>
            Pre-Departure Guidance: Services include housing, cultural orientation, and information on living in South
            Korea.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
