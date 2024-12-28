import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-200 px-10 py-16 text-center text-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Study In Japan</h1>
        <p className="mb-6 text-lg">
          Japan is the world’s leader in education, technology, and culture. Aakash Institute offers comprehensive
          support for studying in Japan.
        </p>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Explore More</button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 rounded-lg bg-white p-8 shadow-lg">
        <img src="/hero.jpg" alt="Japan" className="mb-6 h-64 w-full rounded-md object-cover" />

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Study in Japan?</h2>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          <li>
            High-Quality Education: Japan hosts some of the best universities with various specialties in engineering,
            business administration, technology, and the sciences.
          </li>
          <li>
            Unique Cultural Experience: Japan is one of the world’s most beautiful countries, and living there lets you
            experience tradition, contemporary society, and even innovation.
          </li>
          <li>
            Affordable Education: When considering tuition fees, Japan is one of the most qualitative educational
            offerings with moderate prices among the most visited study destinations.
          </li>
          <li>
            Work Opportunities: International students can find many jobs in Japan during and after their studies.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Support for Students to Study in Japan</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-600">
          <li>
            University Selection Guidance: Help determine the most suitable course and college, depending on the
            available course and college options.
          </li>
          <li>
            Application Assistance: Guidance on the steps of the university admission process and the lack of acceptance
            by any university in Japan.
          </li>
          <li>
            Japanese Language Courses: Learning the Japanese language is essential for acquiring new interpersonal
            skills and fitting in with the new culture.
          </li>
          <li>
            Visa & Travel Support: We will help you get a visa and other documents, organize the trip, and make your
            relocation easy and seamless.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
