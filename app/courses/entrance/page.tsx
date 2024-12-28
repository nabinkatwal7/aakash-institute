import React from 'react';

const ceeData = {
  fullForm: 'Common Entrance Examination (CEE)',
  description:
    'CEE is always a central place for students who would like to further their studies in Universities by taking courses in Engineering, medicine, Pharmacy, Agriculture, and Forestry. At Aakash Institute, we have customized our CEE Preparation Course to ensure that the student acquires all the required knowledge, skills, and approaches to face this competitive examination. The coursework is designed in such a way that you gain all-around preparation for the CEE examination and you get admission to any reputed institution.',
  whatIsCEE:
    'CEE (Common Entrance Examination) is commonly known as the Medical Entrance Examination. It is one of the most essential examinations for students who want to study the bachelor-level courses in Medical, Paramedical, and Health Sciences inside Nepal as well as outside Nepal. It was introduced in 2019 and is conducted by the Medical Education Commission Nepal. The National Medical Education Act 2075 envisions the common entrance examination to be conducted by the Medical Education Commission for the enrollment of students in various programs and colleges throughout the country.',
  programs: [
    {
      title: 'MBBS/BDS/BSc Nursing/BASLP/B Perfusion Technology',
      eligibility: [
        'Passed 10+2 Science or equivalent (with Physics, Chemistry, and Biology) with 50% aggregate in total marks or GPA 2.4 OR Secured the Percentage equivalent to above eligibility in regards to the certificate level programs (A-Level) with different grading system.',
        'Applicants who have passed the Health Science Proficiency Certificate Level/Diploma (General Medicine, Medical Lab Technology, Ophthalmic Science, Dental Science, Pharmacy, Ayurveda, Radiography, Physiotherapy) containing Physics, Chemistry, and Biology with Certificate of Equivalence to Grade 12 Science program from National Examination Board.',
        'Secured at least 50% aggregate in total marks both in Diploma and the Examination for equivalence.',
        'Registered in Nepal Health Professional Council or Nepal Pharmacy Council or Nepal Ayurveda Council as per related educational program.',
      ],
    },
    {
      title: 'BAMS/BSc MLT/BSc MIT/BPT/BPharm/B Optometry',
      eligibility: [
        'Passed 10+2 Science or equivalent (with Physics, Chemistry, and Biology) with 50% aggregate in total marks or GPA 2.4 OR Secured the percentage equivalent to above eligibility in regards to the certificate level programs (e.g. A-Level) with different grading system.',
        'Applicants who have passed the Health Science Proficiency Certificate/Diploma (General Medicine, Medical Lab Technology, Ophthalmic Science, Dental Science, Pharmacy, Ayurveda, Radiography, Physiotherapy) with at least 50% aggregate in total marks.',
        'Registered in Nepal Health Professional Council or Nepal Pharmacy Council or Nepal Ayurveda Council as per related educational program.',
      ],
    },
    {
      title: 'BPH (Bachelor in Public Health)',
      eligibility: [
        'Passed 10+2 Science or equivalent (with Physics, Chemistry, and Biology) with 50% aggregate in total marks or GPA 2.4 OR Secured the Percentage equivalent to above eligibility in regards to the certificate level programs (A-Level) with different grading system.',
        'Applicants who have passed the Health Science Proficiency Certificate/Diploma (General Medicine, Medical Lab Technology, Ophthalmic Science, Dental Science, Pharmacy, Ayurveda, Nursing, Radiography, Physiotherapy) with at least 50% aggregate in total marks.',
        'Registered in Nepal Health Professional Council or Nepal Pharmacy Council, Nepal Nursing Council or Nepal Ayurveda Council as per related educational program.',
      ],
    },
    {
      title: 'BNS (Bachelor in Nursing Science)',
      eligibility: [
        'Proficiency Certificate Level/ Diploma in Nursing securing at least 50% aggregate in total marks.',
        'Registered in Nepal Nursing Council.',
      ],
    },
  ],
  examFormat: {
    questionType: 'Single best response type of multiple-choice questions',
    numberOfQuestions: 200,
    totalMarks: 200,
    cognitiveRatio: 'Recall: Understanding: Application- 30:50:20',
    duration: '3 hours',
  },
  preparationCourseDescription:
    'Designed to meet all the requirements for the exam, our CEE Preparation Course will help you get ready for the test effortlessly. Having engaged instructors, well-organized lessons, and emphasizing both abstract knowledge and practical skills in disciplines, we, thus, assist students in building up their strong fundamental subjects.',
  preparationCourseFields: [
    {
      title: 'Physics',
      details:
        'Coverage of material within areas like mechanics, electricity, magnetism together with thermodynamics. Use of the learned concepts through solving business problems and computation. Concentration should be made on the understanding of concepts and their application that involves shortcut methods to obtain solutions.',
    },
    {
      title: 'Chemistry',
      details:
        'Coursework and lectures involving a strong emphasis on organic chemistry, inorganic chemistry, as well as physical chemistry. To achieve good performance, chemical equations and reactions must be used continuously, as well as problem-solving skills. High stress on the concepts regarding the properties of different chemicals and how they interact under certain conditions as well as using these chemicals in day-to-day practice.',
    },
    {
      title: 'Biology',
      details:
        'Individual analysis of anatomy and physiology of humans, plants, and other organisms, heredity, and ecosystems. Be sure to employ major ideas such as cell biology and structure, anatomy, physiology, etc. To solidify the theoretical concepts learned, you should create a bank of practice diagrams, labeling, etc., as well as biological processes.',
    },
    {
      title: 'Mathematics',
      details:
        "The program will explain the fundamental mathematical subject areas: calculus, algebra, geometry, and trigonometry. To sum up, problem-solving strategies that involve efficiency and precision. Daily solved questions from the previous year's paper or several numerical problems to improve competence in solving difficult problems.",
    },
  ],
  whyJoin: [
    'Interactive Learning Methods: We employ engaging and interactive teaching techniques, such as group discussions, problem-solving sessions, and multimedia tools, to make learning more effective and enjoyable.',
    'Doubt-Clearing Sessions: Our institute offers regular doubt-clearing classes where students can get personalized attention and resolve any queries to strengthen their understanding of each subject.',
    "Adaptive Practice Tests: Our adaptive testing platform adjusts to the student's learning level, ensuring targeted practice and helping students build confidence gradually.",
    'Cutting-Edge Infrastructure: Aakash Institute provides state-of-the-art classrooms and laboratories, giving students access to the best resources and technology to enhance their learning experience.',
    'Performance Tracking: We provide continuous performance monitoring and detailed feedback to help students stay on track and identify areas for improvement, ensuring consistent progress.',
    "Motivational Workshops: We conduct regular motivational sessions and workshops to boost students' confidence, manage exam stress, and keep them inspired throughout their preparation journey.",
    'Strong Alumni Network: Students become part of a robust alumni network that offers insights, mentorship, and guidance from those who have successfully cleared the CEE and pursued top careers.',
  ],
  tips: [
    'Focus on Core Concepts: Make sure you have a good grasp of Physics, Chemistry, Biology, and Mathematics, at least up to the high school level. Refrain from memorizing; instead, understand the basic concepts.',
    'Practice Regularly: I realized that just like any other skill, the methods for tackling problems must be practiced from time to time. Previous years’ question papers/sample papers and mock tests should be solved to get well acquainted with the type of examination.',
    'Time Management: Time management can be more efficiently utilized by practicing time-bound tests. This will assist you in completing the test within the set duration of the exam.',
    'Revise Regularly: Review those topics or formulas you consider essential often to avoid forgetting the information when taking the exam.',
    'Stay Calm and Confident: During the exam preparation and process, ensure that you have a positive attitude and relax. Confidence is the first factor that is important to exam performance.',
  ],
};

const CEEComponent = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="container mx-auto text-center">
        {/* Title and Description */}
        <h2 className="mb-8 text-3xl font-bold text-gray-800">{ceeData.fullForm}</h2>
        <p className="mb-8 text-lg text-gray-700">{ceeData.description}</p>

        {/* What is CEE */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">What is CEE?</h3>
          <p className="text-lg text-gray-700">{ceeData.whatIsCEE}</p>
        </div>

        {/* Eligibility Section */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Eligibility</h3>
          {ceeData.programs.map((program, index) => (
            <div key={index} className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h4 className="mb-2 text-xl font-semibold text-gray-800">{program.title}</h4>
              <ul className="list-none space-y-3 pl-8 text-lg text-gray-700">
                {program.eligibility.map((eligibility, i) => (
                  <li key={i} className="text-gray-700">
                    {eligibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Exam Format Section */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Exam Format</h3>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <p className="mb-4 text-lg text-gray-700">{ceeData.examFormat.questionType}</p>
            <p className="mb-4 text-lg text-gray-700">Number of Questions: {ceeData.examFormat.numberOfQuestions}</p>
            <p className="mb-4 text-lg text-gray-700">Total Marks: {ceeData.examFormat.totalMarks}</p>
            <p className="mb-4 text-lg text-gray-700">Cognitive Ratio: {ceeData.examFormat.cognitiveRatio}</p>
            <p className="mb-4 text-lg text-gray-700">Duration: {ceeData.examFormat.duration}</p>
          </div>
        </div>

        {/* Preparation Course Section */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Preparation Course for CEE at Aakash Institute</h3>
          <p className="mb-4 text-lg text-gray-700">{ceeData.preparationCourseDescription}</p>

          <h4 className="mb-4 text-xl font-semibold text-gray-800">Course Design and Major Competency Fields</h4>
          {ceeData.preparationCourseFields.map((field, index) => (
            <div key={index} className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h5 className="mb-2 text-lg font-semibold text-gray-800">{field.title}</h5>
              <p className="text-gray-700">{field.details}</p>
            </div>
          ))}
        </div>

        {/* Why Join Aakash Institute Section */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Why Join Aakash Institute to Prepare for CEE?</h3>
          <ul className="list-none space-y-3 pl-8 text-lg text-gray-700">
            {ceeData.whyJoin.map((reason, index) => (
              <li key={index} className="text-gray-700">
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Tips for CEE Success Section */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Tips for CEE Success</h3>
          <ul className="list-none space-y-3 pl-8 text-lg text-gray-700">
            {ceeData.tips.map((tip, index) => (
              <li key={index} className="text-gray-700">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CEEComponent;
