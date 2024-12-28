import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-purple-200 px-10 py-16 text-center text-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Study In India</h1>
        <p className="mb-6 text-lg">
          India offers a mix of historic academia, affordable education, and rich culture. Aakash Institute provides
          comprehensive services for students aiming to study in India.
        </p>
        <button className="rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700">
          Explore More
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 rounded-lg bg-white p-8 shadow-lg">
        <img src="/hero.jpg" alt="Japan" className="mb-6 h-64 w-full rounded-md object-cover" />

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Study in India?</h2>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          <li>
            Top-Ranked Institutions: India has premier universities and Institutes with high reputations worldwide.
          </li>
          <li>
            Affordable Education: India offers high standards of learning with an accommodating fee structure for
            international students.
          </li>
          <li>
            Diverse Academic Programs: Students can choose from various disciplines and programs for their future
            occupations.
          </li>
          <li>
            Cultural Diversity and Rich Heritage: Education in India combines modern and traditional modes with easy
            access to festivals, traditions, and historical sites.
          </li>
          <li>
            Global Recognition: Indian degrees are recognized internationally, providing equal opportunities in career
            paths nationally and globally.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-gray-800">How We Support Studying in India</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-600">
          <li>
            University and Course Selection: Help find the right institution and program for your academic history.
          </li>
          <li>
            Application Assistance: Support through the admission process to meet the requirements of the best Indian
            universities.
          </li>
          <li>
            Visa and Travel Support: Assistance with visa acquisition, travel, and initial accommodation when relocating
            to India.
          </li>
          <li>
            Pre-Departure Orientation: Understanding Indias academic structure, culture, and available living places.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
