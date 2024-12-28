import React from 'react';

// Dummy image URLs (replace with your actual images)
const heroImageUrl = '/hero.jpg';
const listeningImageUrl = '/hero.jpg';
const readingImageUrl = '/hero.jpg';
const writingImageUrl = '/hero.jpg';
const speakingImageUrl = '/hero.jpg';

// The JSON data from the user
const ieltsData = {
  test_name: 'International English Language Testing System (IELTS)',
  description:
    'The IELTS, The International English Language Testing System, is the most popular English language proficiency test for those who have learned English as a second language. It acts as an entry point for those who intend to learn, find a job, or reside in first-language English-speaking nations including the United Kingdom, Australia, Canada, and the United States of America. The test assesses your ability to use English across four essential skills: Listening, Reading, Writing, and Speaking. Over 9 million people sit IELTS tests in a year, and IELTS is accepted by universities and employers in many countries and also by immigration authorities.',
  recognized_by: ['Learning institutions', 'Governments', 'Employers'],
  test_purpose: ['Studying', 'Working', 'Immigrating'],
  test_areas_assessed: ['Listening', 'Reading', 'Writing', 'Speaking'],
  test_format: {
    sections: [
      {
        name: 'Listening',
        duration: '30 minutes, plus approximately 10 minutes for answer transfer',
        description:
          'The participants completed 4 audio-taped roles of interactions with native speakers of English in different life settings and narratives. As part of these assessments, you will be required to provide answers concerning the substance of the recorded products.',
        skills_assessed: [
          'Listening skills',
          'Ability to filter specific details from a conversation',
          'Performance on functional and interactive levels',
        ],
      },
      {
        name: 'Reading',
        duration: '60 minutes',
        description:
          'Academic Reading: Three large source texts from books, journals, magazines, or newspapers intended for use by its readers entering universities or other postsecondary or professional programs. General Training Reading: Samples of book passages, adverts, brochures, and newspaper items meant to gauge fundamental English comprehension.',
        skills_assessed: [
          'Reading comprehension',
          'Grasp of meaning',
          'Analyzing text information',
          'Deduction of information from graphical displays',
        ],
      },
      {
        name: 'Writing',
        duration: '60 minutes',
        description:
          'This section includes two tasks. Task 1 involves describing visual information (graphs, charts, diagrams) or writing a letter in the General Training test. Task 2 involves writing an essay in response to a point of view, argument, or problem.',
        skills_assessed: [
          'Ability to describe and explain data',
          'Essay writing skills',
          'Coherence and cohesion in written English',
        ],
      },
      {
        name: 'Speaking',
        duration: '11-14 minutes',
        description:
          'An actual conversation with an IELTS examiner. This section has three parts: Part 1: Basic questions about yourself, your family, work or school, and the like. Part 2: An organizer presents a particular theme, and the participants have one or two minutes to share ideas on what to discuss. Part 3: Extended discussion of the topic proposed by the examiner in Part 2.',
        skills_assessed: ['Expressing ideas', 'Accuracy and grammatical correctness', 'Fluency in spoken English'],
      },
    ],
  },
  scoring: {
    scale: '1 to 9',
    average_score_description:
      'Each IELTS band can be understood as a score reflecting proficiency in English, from 1 (non-user) to 9 (expert user).',
    score_ranges: {
      '9': {
        band: 'Expert User',
        description: 'Possesses detailed control of language as a tool for communication with no mistakes.',
      },
      '8': {
        band: 'Good User',
        description: 'Random inconsistency at times, yet still serving the purpose.',
      },
      '7': {
        band: 'Good User',
        description:
          'Rather better in handling complex language material than the average and occasionally slips in an error or two.',
      },
      '6': {
        band: 'Competent User',
        description:
          'Unrestricted and rather successful use in comprehending, but lack of comprehension in specific settings.',
      },
      '5': {
        band: 'Moderate User',
        description:
          'Has some control over the language though the individual often experiences a definite degree of difficulty in comprehending the meaning and proportions of the message.',
      },
      '4': {
        band: 'Limited User',
        description: 'Cannot use English in simple and complex situations.',
      },
      '1': {
        band: 'Non-user',
        description: 'No ability to use the language except a few isolated words.',
      },
    },
  },
  success_strategies: {
    tips: [
      {
        tip: 'Understand the Format',
        description:
          "Students should have a sneak preview of each section's appearance so there is no gravel during the test.",
      },
      {
        tip: 'Practice Regularly',
        description: 'Maintaining sample questions increases effectiveness in both time usage and understanding.',
      },
      {
        tip: 'Improve Listening Skills',
        description:
          'Listen to podcasts, news, and watch movies in English to improve your understanding of spoken material regardless of accents.',
      },
      {
        tip: 'Expand Your Vocabulary',
        description:
          'Learn new words daily and explore how they should be used correctly. This will greatly enhance your reading and writing scores.',
      },
      {
        tip: 'Work on Fluency',
        description:
          'Try speaking English daily for the Speaking subtest. To gain confidence, you can either record yourself or engage in a conversation with native speakers.',
      },
      {
        tip: 'Time Management',
        description:
          'Never take a lot of time on one question. If you are stuck at one level, just press the ‘next’ button and try the level once again later if needed.',
      },
      {
        tip: 'Stay Calm',
        description:
          'During test day, do not let stress get the best of you. Coping with stress will enable you to reason correctly and respond appropriately.',
      },
    ],
  },
};

const IeltsComponent = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-900 opacity-60"></div>
        <div className="relative px-6 py-24 text-center text-white">
          <h1 className="text-shadow-md mb-4 text-5xl font-bold">{ieltsData.test_name}</h1>
          <p className="mx-auto max-w-3xl text-xl">{ieltsData.description}</p>
        </div>
      </section>

      {/* Test Format Section */}
      <section className="bg-white px-6 py-12 shadow-lg">
        <h2 className="mb-8 text-center text-4xl font-semibold text-gray-700">Test Format</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ieltsData.test_format.sections.map((section, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-6 shadow-xl transition-all ease-in-out hover:shadow-2xl"
            >
              <img
                src={
                  index === 0
                    ? listeningImageUrl
                    : index === 1
                      ? readingImageUrl
                      : index === 2
                        ? writingImageUrl
                        : speakingImageUrl
                }
                alt={section.name}
                className="mb-6 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{section.name}</h3>
              <p className="mb-4 text-gray-600">{section.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Skills Assessed:</h4>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  {section.skills_assessed.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scoring Section */}
      <section className="bg-blue-50 px-6 py-12">
        <h2 className="mb-8 text-center text-4xl font-semibold text-gray-700">Scoring</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(ieltsData.scoring.score_ranges).map(([score, details]) => (
            <div key={score} className="rounded-2xl bg-white p-6 shadow-xl transition-all ease-in-out hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">Band {score}</h3>
              <p className="mt-2 text-gray-600">{details.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Strategies Section */}
      <section className="bg-white px-6 py-12 shadow-lg">
        <h2 className="mb-8 text-center text-4xl font-semibold text-gray-700">Success Strategies</h2>
        <ul className="space-y-6">
          {ieltsData.success_strategies.tips.map((tip, index) => (
            <li
              key={index}
              className="rounded-2xl bg-gray-50 p-6 shadow-xl transition-all ease-in-out hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-gray-800">{tip.tip}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IeltsComponent;
