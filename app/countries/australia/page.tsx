import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-200 px-10 py-16 text-center text-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Study In Australia</h1>
        <p className="mb-6 text-lg">
          Australia has a cosmopolitan society and excellent universities. Our Institute supports students in choosing
          the correct course and country to live in.
        </p>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Explore More</button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 rounded-lg bg-white p-8 shadow-lg">
        <img src="/hero.jpg" alt="Japan" className="mb-6 h-64 w-full rounded-md object-cover" />

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Study in Australia?</h2>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          <li>
            World-Class Education: Australia has some of the highest-ranked university systems worldwide and vital study
            areas in engineering, medicine, business, IT, and social sciences.
          </li>
          <li>
            Cultural Diversity: Living in Australia allows you to understand a multiethnic community and communicate
            with people of different cultures.
          </li>
          <li>
            Post-Study Work Opportunities: Australian immigration laws provide a wide range of post-study work visas for
            gaining work experience.
          </li>
          <li>
            Affordable and Quality Living: Australia offers quality education institutions with many scholarships and a
            rich quality of life at affordable charges.
          </li>
          <li>
            Research Opportunities: Australia is known for research in different fields with advanced technologies.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-gray-800">At Aakash Institute, We Offer:</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-600">
          <li>
            University and Course Selection: Help select the significant university according to the study area and
            careers to pursue.
          </li>
          <li>
            Application and Admission Assistance: Turn your documents into experts and ensure that Australian
            institutions will accept them.
          </li>
          <li>
            Visa Application Support: Help prepare and submit the application and supporting documents for student
            visas.
          </li>
          <li>
            Pre-Departure and Travel Guidance: Ensure readiness to move to Australia regarding accommodation, visas, and
            travel arrangements.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
