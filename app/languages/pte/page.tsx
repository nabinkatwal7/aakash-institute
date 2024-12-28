import Image from 'next/image';
import React from 'react';

const PTEInfo = () => {
  const testData: any = {
    test_name: 'Pearson Test of English (PTE)',
    description:
      'PTE is an English language proficiency test for non-native English speakers, assessing readiness for higher education or professional life. It is recognized globally by institutions, governments, and employers, particularly in the UK, Australia, New Zealand, and Canada.',
    recognized_by: ['Learning institutions', 'Governments', 'Employers'],
    test_purpose: ['Studying', 'Working', 'Immigrating'],
    test_areas_assessed: ['Listening', 'Reading', 'Writing', 'Speaking'],
    test_format: {
      sections: [
        {
          name: 'Speaking & Writing',
          duration: '54–67 minutes',
          description:
            'Tests speaking and writing skills, with tasks like answering questions, repeating words and phrases, telling stories, describing pictures, summarizing lectures, and writing short paragraphs.',
          skills_assessed: ['Speech', 'Written expression', 'Writing fluency'],
          evaluation_criteria: ['Sentence construction accuracy', 'Idea conveyance', 'Grammar and vocabulary usage'],
          image: '/hero.jpg',
        },
        {
          name: 'Reading',
          duration: '29–30 minutes',
          description:
            'Involves reading tasks like multiple-choice questions, completing blanks, and interpreting written material like articles or passages from books.',
          skills_assessed: ['Reading comprehension', 'Interpretation of written material'],
          evaluation_criteria: ['Speed of reading', 'Ability to understand and interpret the material'],
          image: '/hero.jpg',
        },
        {
          name: 'Listening',
          duration: '30–43 minutes',
          description:
            'Includes listening to lectures, conversations, and discussions in English. The questions focus on multiple-choice answers, fill-in-the-blanks, and summarizing.',
          skills_assessed: ['Listening comprehension', 'Understanding of different accents and intonations'],
          evaluation_criteria: ['Comprehension of different English accents', 'Understanding of key points and ideas'],
          image: '/hero.jpg',
        },
      ],
    },
    scoring: {
      scale: '10 to 90',
      average_score_description:
        'The score reflects overall proficiency and individual skills in Speaking, Writing, Reading, and Listening.',
      score_ranges: {
        '85-90': {
          band: 'Expert',
          description:
            'Mastery of the language with almost no faults. Clear communication with occasional minor slips.',
        },
        '76-84': {
          band: 'Quite Good',
          description: 'Can manage intense discussions and work with documents with minimal difficulty.',
        },
        '59-75': {
          band: 'Well Proficient',
          description:
            'Can fulfill normal communication in English but has limited understanding of high-level material.',
        },
        '43-58': { band: 'Proficient', description: 'Can barely understand and use simple English most of the time.' },
        '42 and below': { band: 'Restricted', description: 'Limited proficiency in English.' },
      },
    },
    success_strategies: {
      tips: [
        {
          tip: 'Familiarize Yourself with the Test Format',
          description: 'Know the test sections and types of questions to be prepared for the exam.',
          image: '/hero.jpg',
        },
        {
          tip: 'Practice Regularly',
          description:
            'Regular practice in speaking, writing, reading, and listening will enhance fluency and confidence.',
          image: '/hero.jpg',
        },
        {
          tip: 'Enhance Listening Skills',
          description:
            'Listen to English news, podcasts, and movies to get used to various accents and speaking styles.',
          image: '/hero.jpg',
        },
        {
          tip: 'Expand Your Vocabulary',
          description: 'Learn new words and phrases daily to improve both the Reading and Writing sections.',
          image: '/hero.jpg',
        },
        {
          tip: 'Improve Your Speaking Fluency',
          description: 'Talk to native speakers or use mock tests to practice and get feedback on your speaking.',
          image: '/hero.jpg',
        },
        {
          tip: 'Time Management',
          description:
            'Don’t spend too much time on a single question; move on if unsure and return to it if time allows.',
          image: '/hero.jpg',
        },
        {
          tip: 'Stay Calm on Test Day',
          description:
            'Approach the test with a relaxed, confident mindset to avoid anxiety. Use mindfulness techniques if necessary.',
          image: '/hero.jpg',
        },
      ],
    },
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 mx-auto max-w-4xl p-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">{testData.test_name}</h1>
          <p className="mt-4 text-xl">{testData.description}</p>
        </div>
      </section>

      {/* Recognized By Section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Recognized By</h2>
          <ul className="flex justify-center space-x-10 text-lg text-gray-600">
            {testData.recognized_by.map((item: string, index: number) => (
              <li key={index} className="transition hover:text-blue-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Test Areas Assessed Section */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Test Areas Assessed</h2>
          <ul className="flex justify-center space-x-10 text-lg text-gray-600">
            {testData.test_areas_assessed.map((area: string, index: number) => (
              <li key={index} className="transition hover:text-blue-500">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Test Format Section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-center text-3xl font-semibold text-gray-800">Test Format</h2>
          {testData.test_format.sections.map((section: any, index: number) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-xl transition duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">{section.name}</h3>
              <p className="text-lg text-gray-600">
                <strong>Duration:</strong> {section.duration}
              </p>
              <p className="mt-4 text-gray-700">{section.description}</p>
              <p className="mt-4 text-gray-600">
                <strong>Skills Assessed:</strong> {section.skills_assessed.join(', ')}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Evaluation Criteria:</strong> {section.evaluation_criteria.join(', ')}
              </p>
              <Image
                width={800}
                height={800}
                src={section.image}
                alt={section.name}
                className="mt-6 w-full rounded-lg shadow-md transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Scoring Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Scoring</h2>
          <p className="text-lg text-gray-600">{testData.scoring.average_score_description}</p>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.keys(testData.scoring.score_ranges).map((range, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-xl transition duration-300 hover:shadow-2xl">
                <h4 className="text-lg font-semibold text-gray-800">{range}</h4>
                <p className="text-gray-600">
                  <strong>Band:</strong> {testData.scoring.score_ranges[range].band}
                </p>
                <p className="text-gray-600">{testData.scoring.score_ranges[range].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Strategies Section */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-center text-3xl font-semibold text-gray-800">Success Strategies</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testData.success_strategies.tips.map((tip: any, index: number) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-xl transition duration-300 hover:shadow-2xl">
                <h4 className="text-lg font-semibold text-gray-800">{tip.tip}</h4>
                <p className="text-gray-600">{tip.description}</p>
                <Image
                  width={800}
                  height={800}
                  src={tip.image}
                  alt={tip.tip}
                  className="mt-4 rounded-lg shadow-md transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PTEInfo;
