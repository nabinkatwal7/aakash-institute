import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-200 px-10 py-16 text-center text-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Study In Canada</h1>
        <p className="mb-6 text-lg">
          Canada is renowned for its quality education, standard of living, and welcoming nature towards international
          students. Aakash Institute provides practical advice and support for students wishing to study in Canada.
        </p>
        <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">Explore More</button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 rounded-lg bg-white p-8 shadow-lg">
        <img src="/hero.jpg" alt="Japan" className="mb-6 h-64 w-full rounded-md object-cover" />

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Study in Canada?</h2>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          <li>
            Globally Recognized Universities: Canada offers a wide range of programs in renowned universities like the
            University of Toronto and McGill University.
          </li>
          <li>
            High-Quality Education: Canadian universities are internationally recognized for their academic programs and
            student-oriented learning system.
          </li>
          <li>
            Affordable Education: Canada provides cheaper tuition fees and cost of living compared to other study
            destinations, along with scholarship opportunities.
          </li>
          <li>
            Work and Study Options: International students can work part-time and have post-graduation work visa
            opportunities.
          </li>
          <li>
            High Quality of Life: Canada offers a safe, clean environment, cultural diversity, and a good quality of
            life for international students.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Support for Studying in Canada</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-600">
          <li>Course and University Selection: Guidance for selecting the right program and institution to pursue.</li>
          <li>Application Assistance: Detailed procedures for the university application process.</li>
          <li>Visa Application Support: Guidance on preparing and applying for Canadian student visa.</li>
          <li>
            Pre-Departure Guidance: Help with transportation, housing, and adjustment to the Canadian way of life.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
