import React from 'react';

const courseData = {
  title: 'Diploma in Information Technology',
  description:
    'The Diploma in Information Technology (IT) curriculum, taught at the Aakash Institute, will equip students for the growing technology sector. This course addresses vital areas such as compiler programming, network programming, database development, website development, and software engineering.',
  highlights: [
    'Addresses key areas in IT like compiler programming, network programming, and database development.',
    'Focuses on real-world applications and practical skills required for IT professionals.',
    'Prepares students for the growing technology sector and equips them with modern technology expertise.',
  ],
  learningOutcomes: [
    'Gain practical skills in areas like network programming and software development.',
    'Learn the fundamentals of database management and website development.',
    'Acquire problem-solving abilities and hands-on experience with real-world IT projects.',
  ],
  whyAakash:
    'Aakash Institute’s curriculum is designed to equip students with practical knowledge and skills, offering an extensive hands-on experience in modern IT practices, making our students highly employable in the fast-evolving technology landscape.',
};

const DiplomaITCourse = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">{courseData.title}</h2>
        <p className="mb-6 text-lg text-gray-700">{courseData.description}</p>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Course Highlights</h3>
        <ul className="mb-8 list-none pl-8">
          {courseData.highlights.map((highlight, index) => (
            <li key={index} className="text-gray-700">
              {highlight}
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">What You Will Learn</h3>
        <ul className="mb-8 list-none pl-8">
          {courseData.learningOutcomes.map((outcome, index) => (
            <li key={index} className="text-gray-700">
              {outcome}
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Why Choose Aakash Institute?</h3>
        <p className="mb-6 text-lg text-gray-700">{courseData.whyAakash}</p>
      </div>
    </section>
  );
};

export default DiplomaITCourse;
