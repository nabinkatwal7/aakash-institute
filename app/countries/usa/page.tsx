import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-200 px-10 py-16 text-center text-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Study In USA</h1>
        <p className="mb-6 text-lg">
          The USA offers quality education, research opportunities, and employment prospects. Aakash Institute supports
          students in pursuing education in the USA.
        </p>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Explore More</button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 rounded-lg bg-white p-8 shadow-lg">
        <img src="/hero.jpg" alt="Japan" className="mb-6 h-64 w-full rounded-md object-cover" />

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Study in the USA?</h2>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          <li>
            World-Class Universities: Famous universities like Harvard, MIT, and Stanford offer superior programs in
            various fields.
          </li>
          <li>
            Cutting-Edge Research and Innovation: The USA sets the highest international standards in research and
            innovation.
          </li>
          <li>
            Diverse Academic Choices: Universities offer vast opportunities and a wide choice of programs at all levels
            of study.
          </li>
          <li>
            Cultural Diversity and Global Exposure: The multicultural environment provides exposure to different views
            and experiences.
          </li>
          <li>
            Post-Study Career Opportunities: The USA offers excellent employment opportunities through OPT for
            international students.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-gray-800">How We Support Study in the USA</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-600">
          <li>
            University and Course Selection: Help students select the most suitable universities and programs based on
            academic abilities and career plans.
          </li>
          <li>
            Application and Admission Guidance: Assistance in completing applications to meet the requirements of top US
            institutions.
          </li>
          <li>
            Visa Application Assistance: Support with the F-1 student visa application process and required
            documentation.
          </li>
          <li>
            Pre-Departure Preparation: Extensive information on accommodation, travel, and adjusting to life in the USA.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
