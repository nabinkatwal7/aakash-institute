import Image from 'next/image';
import React from 'react';

const englishData = {
  introduction: {
    importance:
      "Learning English is crucial in today's globalized world, as it is the primary language of international communication, business, and technology. English is spoken by millions of people worldwide and is often the default language in academia, entertainment, and professional settings. Mastery of English opens doors to a wide range of opportunities and enriches personal, academic, and career prospects.",
  },
  course_structure: {
    overview:
      'Our English Language Course at Aakash Institute is tailored for students of all levels. We offer a comprehensive curriculum that focuses on speaking, listening, reading, and writing skills, providing an immersive learning experience. Interactive lessons will help you gain confidence and practical skills for real-life communication.',
    levels: [
      {
        level: 'Beginner (A1 & A2)',
        focus:
          'Basic vocabulary, sentence structure, and introduction to grammar. You will learn simple sentence patterns and everyday phrases.',
        outcome:
          'By the end of this level, students can introduce themselves, ask basic questions, and understand simple instructions.',
        image: '/hero.jpg',
      },
      {
        level: 'Intermediate (B1)',
        focus:
          'Expanding grammar and vocabulary, improving conversational skills, and understanding written texts. This level includes a variety of topics to improve day-to-day communication.',
        outcome: 'Students will have a stronger command of the language for regular conversations and basic writing.',
        image: '/hero.jpg',
      },
      {
        level: 'Advanced (B2 & C1)',
        focus:
          'Refining grammar, advanced vocabulary, and complex sentence structures. You will practice professional and academic communication through various exercises and writing assignments.',
        outcome:
          'By the end of this level, students can engage in advanced conversations, write essays, and participate in academic discussions.',
        image: '/hero.jpg',
      },
    ],
  },
  english_proficiency_levels: {
    description:
      'English proficiency is measured using tests such as IELTS, TOEFL, and PTE. These tests assess reading, writing, listening, and speaking skills and provide a score that indicates the level of proficiency.',
    levels: [
      {
        level: 'C1',
        proficiency: 'Advanced',
        score_range: '0-9 (IELTS)',
        passing_score: 7,
        description: 'High proficiency in understanding and producing complex academic or professional content.',
        image: '/hero.jpg',
      },
      {
        level: 'B2',
        proficiency: 'Upper-Intermediate',
        score_range: '0-9 (IELTS)',
        passing_score: 6,
        description: 'Good command of English, able to communicate effectively in most situations.',
        image: '/hero.jpg',
      },
      {
        level: 'B1',
        proficiency: 'Intermediate',
        score_range: '0-9 (IELTS)',
        passing_score: 5.5,
        description: 'Can understand the main points of clear texts and engage in conversations about familiar topics.',
        image: '/hero.jpg',
      },
      {
        level: 'A2',
        proficiency: 'Elementary',
        score_range: '0-9 (IELTS)',
        passing_score: 4.5,
        description: 'Basic proficiency, able to communicate in everyday situations.',
        image: '/hero.jpg',
      },
      {
        level: 'A1',
        proficiency: 'Beginner',
        score_range: '0-9 (IELTS)',
        passing_score: 4,
        description: 'Basic understanding of simple phrases and expressions used in common situations.',
        image: '/hero.jpg',
      },
    ],
  },
  success_strategies: {
    tips: [
      'Focus on Vocabulary: Expand your vocabulary by learning new words and their meanings.',
      'Practice Speaking Every Day: Use language apps or speak with native speakers to practice your speaking skills.',
      'Listen to English Media: Watch movies, listen to podcasts, and read English books to improve your listening skills.',
      'Practice Writing Essays: Improve your writing by composing essays, blogs, or daily journal entries.',
      'Engage in Conversations: Join conversation clubs or take part in group discussions to gain confidence.',
      'Stay Consistent: Set aside time daily for learning and reviewing English concepts.',
      'Take Practice Tests: Regularly take mock exams to evaluate your progress and get familiar with exam formats.',
    ],
  },
};

const CourseCard = ({
  level,
  focus,
  outcome,
  image,
}: {
  level: string;
  focus: string;
  outcome: string;
  image: string;
}) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl">
      <Image width={800} height={800} className="mb-4 h-48 w-full rounded-md object-cover" src={image} alt={level} />
      <h3 className="mb-2 text-xl font-semibold text-indigo-700">{level}</h3>
      <p className="mb-4 text-gray-800">{focus}</p>
      <p className="text-gray-600">{outcome}</p>
    </div>
  );
};

const ProficiencyLevelCard = ({
  level,
  proficiency,
  passing_score,
  description,
  image,
}: {
  level: string;
  proficiency: string;
  passing_score: number;
  description: string;
  image: string;
}) => {
  return (
    <div className="mb-6 rounded-lg bg-blue-100 p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
      <Image width={800} height={800} className="mb-4 h-48 w-full rounded-md object-cover" src={image} alt={level} />
      <h3 className="mb-2 text-2xl font-semibold text-blue-800">
        {level} - {proficiency}
      </h3>
      <p className="mb-2 text-blue-600">Passing Score: {passing_score}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const SuccessTip = ({ tip }: { tip: string }) => {
  return (
    <div className="mb-4 rounded-lg bg-green-100 p-4 shadow-md transition-all duration-300 hover:shadow-2xl">
      <p className="text-green-800">{tip}</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-indigo-600 to-blue-400 p-16 text-white"
      style={{ backgroundImage: 'url("/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-5xl font-extrabold">Learn English with Confidence</h1>
        <p className="mx-auto mb-8 max-w-lg text-xl">
          Open doors to global opportunities, enhance your communication skills, and boost your career with our
          comprehensive English courses.
        </p>
        <a
          href="#course-structure"
          className="rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-black transition duration-300 hover:bg-yellow-400"
        >
          Start Learning Now
        </a>
      </div>
    </section>
  );
};

const EnglishLearningPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <HeroSection />

        {/* Introduction Section */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg" id="course-structure">
          <h2 className="mb-4 text-2xl font-semibold text-indigo-700">Why Learn English?</h2>
          <p className="text-gray-800">{englishData.introduction.importance}</p>
        </section>

        {/* Course Structure */}
        <h2 className="mb-4 text-2xl font-semibold text-indigo-700">Course Structure</h2>
        {englishData.course_structure.levels.map((level, index) => (
          <CourseCard key={index} {...level} />
        ))}

        {/* Proficiency Levels */}
        <h2 className="mb-4 text-2xl font-semibold text-indigo-700">English Proficiency Levels</h2>
        {englishData.english_proficiency_levels.levels.map((level, index) => (
          <ProficiencyLevelCard key={index} {...level} />
        ))}

        {/* Success Strategies */}
        <h2 className="mb-4 text-2xl font-semibold text-indigo-700">Success Tips</h2>
        {englishData.success_strategies.tips.map((tip, index) => (
          <SuccessTip key={index} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default EnglishLearningPage;
