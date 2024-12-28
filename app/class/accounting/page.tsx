import React from 'react';

const courseData = {
  title: 'Diploma in Computer Application (Accounting Package)',
  description:
    'The Diploma in Computer Application (Accounting Package) program offered at Aakash Institute aims to prepare students in accounting software, computer applications, and financial management. This course is designed for professional accountants to focus on tangible knowledge of computerized accounts and familiarize themselves with Tally, Excel, and related software.',
  courseDetails:
    'Suitable for learners wishing to pursue a career in finance and accounting, our diploma program prepares you with the right skills to become an accountant, bookkeeper, auditor, or financial analyst, among other positions. Designed with practical practice sessions and live business examples, our diploma program equips you to manage financial documentation and procedures in the digital world.',
  learningOutcomes: [
    'Gain practical knowledge of accounting software like Tally and Excel.',
    'Understand financial management and the digitalization of accounting processes.',
    'Prepare financial documentation and manage procedures in the digital world.',
    'Get hands-on experience with live business examples to strengthen skills.',
    'Learn the basics of bookkeeping, auditing, and financial analysis.',
  ],
  skillsAcquired: [
    'Proficiency in using accounting software such as Tally and Excel.',
    'Hands-on skills in financial management and computerized accounts.',
    'Ability to work with live business examples and practical accounting scenarios.',
    'Proficiency in managing financial documentation and procedures.',
    'Capability to pursue a career as an accountant, bookkeeper, auditor, or financial analyst.',
  ],
  whyAakash:
    'Aakash Institute offers an industry-relevant curriculum designed to equip students with the practical skills needed in the finance and accounting fields. Our hands-on approach ensures that students not only understand the theory but also have the experience required to excel in the digitalized world of finance.',
};

const DiplomaAccountingPackage = () => {
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

export default DiplomaAccountingPackage;
