import React from 'react';

const CMAT_KUUMAT_Info = () => {
  const cmatData = {
    fullForm: 'Central Management Admission Test',
    description:
      'Central Management Admission Test is popularly known as CMAT entrance exam is annually conducted by the Faculty of Management, Tribhuvan University. The examination is generally held on the month of August / September after the announcement of Grade XII result.',
    programs: [
      'Bachelor in Travel and Tourism Management (BTTM)',
      'Bachelor of Business Administration (BBA)',
      'Bachelor of Business Management (BBM)',
      'Bachelor of Hotel Management (BHM)',
      'Bachelor of Information Management (BIMP)',
      'Bachelor of Mountaineering Studies (BMS)',
      'Bachelor of Public Administration (BPA)',
    ],
    examFormat: {
      components: [
        { name: 'Verbal Ability', marks: 25 },
        { name: 'Quantitative Ability', marks: 25 },
        { name: 'Logical Reasoning', marks: 25 },
        { name: 'General Awareness', marks: 25 },
      ],
      totalMarks: 100,
      duration: '90 minutes',
      passPercentage: 40,
      interviewRequired: true,
    },
    meritListCriteria: [
      { criteria: '60% of marks secured in the CMAT Entrance examination for BBA, BBM, BPA & BIM', percentage: '60%' },
      { criteria: '50% for BHM, BTTM & BMS', percentage: '50%' },
      { criteria: '30% of marks secured in percentage in Plus Two or equivalent', percentage: '30%' },
      { criteria: '10% Interview', percentage: '10%' },
      { criteria: '10% Group Discussion for BHM, BTTM & BMS', percentage: '10%' },
    ],
    eligibility: [
      'Minimum D+ grade in each subject of grade 11 and 12 with CGPA 1.8 or more',
      'Minimum score of second division marks in 10+2, PCL or Equivalent in any discipline',
      'Students waiting for grade 12 results can also apply, but they must submit their grade 12 certificate at the time of admission',
    ],
    reExam:
      'From year 2018 (2075), FOM Tribhuvan University (TU) introduced the policy of re-exam for students who missed or failed the CMAT exam. The re-exam takes place about one month after the main exam.',
    courseOutline: [
      {
        subject: 'English',
        details:
          'Vocabulary, grammar, and reading skills. Sample questions build the knowledge of the subject concerning the syntactic category of a sentence, synonyms, and antonyms.',
      },
      {
        subject: 'Mathematics',
        details: 'Algebra, arithmetic, geometry, and data interpretation. Quick ways to solve problems with shortcuts.',
      },
      {
        subject: 'Logical Reasoning',
        details:
          'Activities in puzzles, sequences, and questions of logical reasoning. Develop verbal and non-verbal reasoning skills.',
      },
      {
        subject: 'General Knowledge',
        details: 'Current events, World history, geographical locations, and more. Weekly quizzes for quick revision.',
      },
    ],
  };

  const kuumatData = {
    fullForm: 'Kathmandu University Undergraduate Management Admission Test',
    description:
      'KUUMAT is the admission test for undergraduate programs in Management at Kathmandu University. This test helps select eligible candidates for BBA, BBIS, and BHTM programs.',
    eligibility: [
      'Minimum of 50% in aggregate or CGPA of 2.0 on the scale of 4.0 in 10+2 or equivalent level from recognized universities/boards.',
      'Applicants waiting for final results can apply on a provisional basis.',
    ],
    examPattern: [
      'Multiple choice questions with negative marking (0.25 marks deducted for each incorrect answer).',
      'Includes both SAT General and SAT Mathematics Test.',
    ],
    courseOutline: [
      { subject: 'General SAT', details: 'Tests your general knowledge and reasoning ability.' },
      { subject: 'SAT Mathematics Test', details: 'Tests mathematical reasoning and problem-solving skills.' },
    ],
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 mx-auto py-36 text-center text-white">
          <h1 className="text-4xl font-extrabold">Join the Best Management Programs in Nepal</h1>
          <p className="mt-4 text-lg">
            Prepare for CMAT & KUUMAT and take the first step toward a successful career in management.
          </p>
        </div>
      </section>

      {/* CMAT Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">{cmatData.fullForm}</h2>
          <p className="mb-8 text-lg text-gray-600">{cmatData.description}</p>

          {/* Programs Offered */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Programs Offered</h3>
            <ul className="list-none space-y-2 pl-8 text-lg text-gray-700">
              {cmatData.programs.map((program, index) => (
                <li key={index} className="text-gray-700">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Format */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Exam Format</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-gray-700">Component</th>
                    <th className="px-6 py-4 text-gray-700">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {cmatData.examFormat.components.map((component, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-800">{component.name}</td>
                      <td className="px-6 py-4 text-gray-800">{component.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-gray-700">
              <p>Total Marks: {cmatData.examFormat.totalMarks}</p>
              <p>Duration: {cmatData.examFormat.duration}</p>
              <p>Pass Percentage: {cmatData.examFormat.passPercentage}%</p>
              <p>Interview Required: {cmatData.examFormat.interviewRequired ? 'Yes' : 'No'}</p>
            </div>
          </div>

          {/* Merit List Criteria */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Merit List Criteria</h3>
            <div className="space-y-4 text-lg text-gray-700">
              {cmatData.meritListCriteria.map((criteria, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2 font-medium">•</span>
                  <span>
                    {criteria.criteria} ({criteria.percentage})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Eligibility</h3>
            <div className="space-y-4 text-lg text-gray-700">
              {cmatData.eligibility.map((eligibility, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2 font-medium">•</span>
                  <span>{eligibility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Re-Exam */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Re-Exam</h3>
            <p className="text-lg text-gray-700">{cmatData.reExam}</p>
          </div>

          {/* Course Outline */}
          <div className="space-y-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Course Outline</h3>
            <div className="space-y-6">
              {cmatData.courseOutline.map((subject, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800">{subject.subject}</h4>
                  <p className="text-gray-700">{subject.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KUUMAT Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">{kuumatData.fullForm}</h2>
          <p className="mb-8 text-lg text-gray-700">{kuumatData.description}</p>

          {/* Eligibility Section */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Eligibility</h3>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <ul className="list-none space-y-3 pl-8 text-lg text-gray-700">
                {kuumatData.eligibility.map((eligibility, index) => (
                  <li key={index} className="text-gray-700">
                    {eligibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exam Pattern Section */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Exam Pattern</h3>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <ul className="list-none space-y-3 pl-8 text-lg text-gray-700">
                {kuumatData.examPattern.map((pattern, index) => (
                  <li key={index} className="text-gray-700">
                    {pattern}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Course Outline Section */}
          <div className="space-y-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Course Outline</h3>
            <div className="space-y-6">
              {kuumatData.courseOutline.map((subject, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">{subject.subject}</h4>
                  <p className="text-gray-700">{subject.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMAT_KUUMAT_Info;
