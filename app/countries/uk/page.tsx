import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-yellow-200 px-10 py-16 text-center text-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Study In UK</h1>
        <p className="mb-6 text-lg">
          The United Kingdom hosts some of the most revered universities in the world and provides a multicultural
          learning experience. Aakash Institute supports students in studying in the UK.
        </p>
        <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
          Explore More
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 rounded-lg bg-white p-8 shadow-lg">
        <img src="/hero.jpg" alt="Japan" className="mb-6 h-64 w-full rounded-md object-cover" />

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Study in the UK?</h2>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          <li>
            Globally Recognized Universities: The UK has several quality universities offering programs in various
            fields.
          </li>
          <li>
            Shorter Duration of Courses: UK universities complete programs in a shorter time without compromising on
            quality.
          </li>
          <li>Cultural Diversity and Rich History: The UK offers a friendly climate and rich cultural experiences.</li>
          <li>
            Work While Studying: International students can undertake part-time employment to gain practical experience.
          </li>
          <li>
            Post-Study Work Opportunities: The UK provides post-study work visas for up to two years after completing
            studies.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
