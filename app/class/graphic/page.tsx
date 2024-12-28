import React from 'react';

const GraphicDesigningCourse = () => {
  const courseData = {
    title: 'Diploma in Graphic Designing',
    description:
      'The Diploma in Graphic Designing at Aakash Institute is tailored to help students develop the artistic and technical skills required to create visually compelling designs. This course covers essential topics such as digital illustration, layout design, branding, photo editing, and the use of industry-standard software like Adobe Photoshop, Illustrator, and InDesign.',
    courseDetails:
      'With a strong emphasis on creativity and hands-on practice, our graphic design diploma allows students to work on real-world projects, building a professional portfolio that showcases their design expertise. Whether you aspire to become a graphic designer, visual artist, or multimedia designer, this course equips you with the skills to excel in a dynamic and fast-growing industry.',
    learningOutcomes: [
      'Develop artistic and technical skills required for visual design.',
      'Learn industry-standard software such as Adobe Photoshop, Illustrator, and InDesign.',
      'Understand the principles of layout design, branding, and digital illustration.',
      'Gain hands-on experience working on real-world design projects.',
      'Build a professional design portfolio to showcase skills.',
    ],
    skillsAcquired: [
      'Proficiency in Adobe Photoshop, Illustrator, and InDesign.',
      'Ability to create digital illustrations and branding materials.',
      'Mastery in layout design and photo editing.',
      'Experience in building a professional portfolio with real-world projects.',
      'Strong creativity and design thinking to excel in the graphic design field.',
    ],
    whyAakash:
      'Aakash Institute offers a comprehensive and practical approach to graphic design education. Our curriculum is tailored to meet the demands of the industry, and our experienced instructors guide students through every step of the learning process. By the end of the course, you will have a professional portfolio and the skills to thrive in a competitive industry.',
  };

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">{courseData.title}</h2>
        <p className="mb-6 text-lg text-gray-700">{courseData.description}</p>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Course Details</h3>
        <p className="mb-6 text-lg text-gray-700">{courseData.courseDetails}</p>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">What You Will Learn</h3>
        <ul className="mb-8 list-none pl-8">
          {courseData.learningOutcomes.map((outcome, index) => (
            <li key={index} className="text-gray-700">
              {outcome}
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Skills Acquired</h3>
        <ul className="mb-8 list-none pl-8">
          {courseData.skillsAcquired.map((skill, index) => (
            <li key={index} className="text-gray-700">
              {skill}
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Why Choose Aakash Institute?</h3>
        <p className="mb-6 text-lg text-gray-700">{courseData.whyAakash}</p>
      </div>
    </section>
  );
};

export default GraphicDesigningCourse;
