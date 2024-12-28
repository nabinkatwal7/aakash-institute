import Image from 'next/image';
import React from 'react';

const data = {
  introduction: {
    importance:
      "Learning Japanese is crucial as it opens doors to opportunities in education, employment, and living in Japan. It is widely spoken by over 125 million people worldwide and enhances your understanding of Japanese culture, traditions, and business. Mastery of Japanese is essential for global communication and expanding one's opportunities in the modern economy.",
  },
  course_structure: {
    overview:
      'At Aakash Institute, the Japanese Language Course is designed for students of all levels. The curriculum covers essential language skills: speaking, listening, reading, and writing, offering an all-around learning experience. Our approach focuses on interactive and engaging methods to boost confidence and practical usage in real-life scenarios.',
    levels: [
      {
        level: 'Beginner (N5 & N4)',
        focus:
          'Basic grammar, important vocabulary, and sentence formation. You will learn hiragana, katakana, and some basic kanji characters.',
        outcome:
          'By the end of this level, students can read and write basic Japanese characters and form simple sentences.',
        image: '/hero.jpg',
      },
      {
        level: 'Intermediate (N3)',
        focus:
          'Expanding sentence patterns, refining kanji knowledge, and improving vocabulary. This level covers everyday communication for interpersonal use.',
        outcome: 'Students will handle more complex grammar and improve their ability to communicate in Japanese.',
        image: '/hero.jpg',
      },
      {
        level: 'Advanced (N2 & N1)',
        focus:
          'Mastering intermediate and advanced grammar rules, kanji, and vocabulary. Special emphasis on reading, writing, speaking, and preparing for professional or academic contexts.',
        outcome:
          'Students will develop a high level of proficiency in Japanese, preparing them for various real-world contexts.',
        image: '/hero.jpg',
      },
    ],
  },
  jlpt_levels: {
    description:
      'The Japanese Language Proficiency Test (JLPT) is the globally recognized test for assessing Japanese language proficiency. It is divided into five levels:',
    levels: [
      {
        level: 'N1',
        proficiency: 'Advanced',
        score_range: '0-180',
        passing_score: 100,
        description: 'High-level proficiency in understanding advanced texts and abstract topics.',
        image: '/hero.jpg',
      },
      {
        level: 'N2',
        proficiency: 'Upper-Intermediate',
        score_range: '0-180',
        passing_score: 90,
        description: 'Strong grasp of Japanese, capable of understanding complex topics in reading and conversations.',
        image: '/hero.jpg',
      },
      {
        level: 'N3',
        proficiency: 'Intermediate',
        score_range: '0-180',
        passing_score: 95,
        description: 'Moderate understanding of Japanese in daily life and conversations.',
        image: '/hero.jpg',
      },
      {
        level: 'N4',
        proficiency: 'Upper Beginner',
        score_range: '0-180',
        passing_score: 90,
        description: 'Ability to understand basic Japanese, such as familiar topics and simple conversations.',
        image: '/hero.jpg',
      },
      {
        level: 'N5',
        proficiency: 'Beginner',
        score_range: '0-180',
        passing_score: 80,
        description:
          'Basic understanding of Japanese, including simple phrases and sentences used in everyday situations.',
        image: '/hero.jpg',
      },
    ],
  },
  success_strategies: {
    tips: [
      'Focus on the Writing System: Start with hiragana and katakana to build the foundation.',
      'Practice Daily Conversations: Engage in simple conversations with locals or other learners to build confidence.',
      'Listen to Native Speakers: Regularly listen to Japanese podcasts, TV shows, and news programs to familiarize yourself with various accents and pronunciations.',
      'Master Kanji Step by Step: Learn kanji gradually, focusing on 5-10 characters a day and memorizing their meanings, readings, and stroke order.',
      'Immerse Yourself in the Language: Engage with Japanese media like books, blogs, anime, and music to speed up learning.',
      'Stay Consistent: Practice daily and allocate time for review and repetition to reinforce learning.',
      'Take Mock JLPT Exams: Familiarize yourself with the JLPT format and timing through practice exams.',
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

const JLPTLevelCard = ({
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
        <h1 className="mb-4 text-5xl font-extrabold">Learn Japanese with Confidence</h1>
        <p className="mx-auto mb-8 max-w-lg text-xl">
          Unlock new opportunities, immerse yourself in Japanese culture, and boost your career with our comprehensive
          Japanese courses.
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

const JapaneseLearningPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <HeroSection />

        {/* Introduction Section */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg" id="course-structure">
          <h2 className="mb-4 text-2xl font-semibold text-indigo-700">Why Learn Japanese?</h2>
          <p className="text-gray-800">{data.introduction.importance}</p>
        </section>

        {/* Course Structure */}
        <h2 className="mb-4 text-2xl font-semibold text-indigo-700">Course Structure</h2>
        {data.course_structure.levels.map((level, index) => (
          <CourseCard key={index} {...level} />
        ))}

        {/* JLPT Levels */}
        <h2 className="mb-4 text-2xl font-semibold text-indigo-700">JLPT Levels</h2>
        {data.jlpt_levels.levels.map((level, index) => (
          <JLPTLevelCard key={index} {...level} />
        ))}

        {/* Success Strategies */}
        <h2 className="mb-4 text-2xl font-semibold text-indigo-700">Success Tips</h2>
        {data.success_strategies.tips.map((tip, index) => (
          <SuccessTip key={index} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default JapaneseLearningPage;
