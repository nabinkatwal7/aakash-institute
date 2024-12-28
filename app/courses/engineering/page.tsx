import React from 'react';

const preparationData = {
  heroTitle: 'Entrance Preparation Courses at Aakash Institute',
  heroDescription: 'Prepare for top engineering and IT entrance exams with expert guidance and structured courses.',
  beCourse: {
    title: 'Bachelor in Engineering (BE) Entrance Preparation',
    description:
      'The BE Entrance Preparation Course at Aakash Institute has been structured to equip students with the necessary knowledge to perform excellently in the various entrance exams determining admission to these engineering institutions.',
    whyAakash: [
      'Aakash provides a platform to students to excel in the field of engineering.',
      'In today’s competitive scenario, it is crucial to improve knowledge and apply it effectively.',
      'Aakash believes in delivering superior services in Engineering preparation.',
      'Our program is structured to cope with present challenges.',
    ],
  },
  ioeSection: {
    title: 'Institute of Engineering (IOE)',
    description:
      'Institute of Engineering (IOE) conducts entrance examinations for engineering programs. Only eligible candidates who pass the entrance exam are admitted to various colleges across Nepal.',
  },
  csitCourse: {
    title: 'BSc. CSIT Entrance Preparation',
    description:
      'The BSc. CSIT Entrance Preparation Course at Aakash Institute is designed to help students prepare for the entrance tests conducted for Bachelor of Science in Computer Science and Information Technology programs.',
  },
  itCourse: {
    title: 'Diploma in Information Technology',
    description:
      'The Diploma in Information Technology (IT) curriculum at Aakash Institute prepares students for the growing technology sector, covering areas like network programming, database development, and software engineering.',
  },
};

const EntrancePreparationComponent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">{preparationData.heroTitle}</h1>
          <p className="mb-6 text-xl">{preparationData.heroDescription}</p>
          <a
            href="#be-course"
            className="rounded-full bg-white px-6 py-2 font-semibold text-blue-600 transition duration-300 hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* BE Entrance Preparation */}
      <section id="be-course" className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">{preparationData.beCourse.title}</h2>
          <p className="mb-4 text-lg text-gray-700">{preparationData.beCourse.description}</p>

          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Why Choose Aakash Institute for BE?</h3>
          <ul className="mb-8 list-none pl-8">
            {preparationData.beCourse.whyAakash.map((reason, index) => (
              <li key={index} className="text-gray-700">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Institute of Engineering (IOE) */}
      <section className="bg-white px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">{preparationData.ioeSection.title}</h2>
          <p className="mb-4 text-lg text-gray-700">{preparationData.ioeSection.description}</p>
        </div>
      </section>

      {/* BSc. CSIT Entrance Preparation */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">{preparationData.csitCourse.title}</h2>
          <p className="mb-4 text-lg text-gray-700">{preparationData.csitCourse.description}</p>
        </div>
      </section>

      {/* Diploma in Information Technology */}
      <section className="bg-white px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">{preparationData.itCourse.title}</h2>
          <p className="mb-4 text-lg text-gray-700">{preparationData.itCourse.description}</p>
        </div>
      </section>
    </>
  );
};

export default EntrancePreparationComponent;
