import React from 'react';

const data = {
  institution: 'Aakash Institute',
  description:
    'CTEVT (Council for Technical Education and Vocational Training) courses offered at Aakash Institute are for students interested in technical and vocational field education sessions. These courses provide a combination of theory and experience in practical training so that students are suitable for jobs in engineering, healthcare facilities, information technology, agriculture, and engineering, among others. Aakash Institute provides complete coaching and assistance to guide students to get successful results in CTEVT entrances and classes. Our expert faculty aims to create a solid foundation in choice subjects and provides valuable tips for success in chosen technical areas. As much skills-based education, CTEVT courses pave the way to vast employment opportunities in Nepal and foreign countries.',
  courses: {
    type: 'Diploma (3 years)',
    categories: [
      {
        category: 'Health/Nursing',
        programs: [
          'HA',
          'Pharmacy',
          'Labtech',
          'Radiography',
          'Nursing',
          'Opthalmic',
          'Amchiscience',
          'Ayurveda',
          'Homeopathy',
          'Dental',
          'Yoga & Naturopathy',
          'Pclinmidwifery & Many More',
        ],
      },
      {
        category: 'Engineering',
        programs: [
          'Civil',
          'Mechanical',
          'Electrical',
          'DIT',
          'Geomatic',
          'Computer',
          'Biomedical',
          'Automobile',
          'Architecture',
          'Hydropower',
          'Electric & Electronic and More',
        ],
      },
      {
        category: 'Agriculture',
        programs: ['ISC. Ag in Plant/Animal', 'JTI in Plant/Animal', 'Food & Dairy Technology'],
      },
      {
        category: 'Management',
        programs: [
          'Social Work',
          'Journalism & Mass Communication',
          'Entrepreneurship',
          'Fashion Designing',
          'Beauty & Cosmetology',
        ],
      },
      {
        category: 'Hospitality',
        programs: ['Hotel Management'],
      },
    ],
    pre_diploma_courses: '18 months',
    short_term_courses: 'Available',
  },
  ctevt_institutions: {
    central_office: 'Available',
    provincial_offices: 7,
    affiliated_institutions: {
      constituent_institute: 59,
      institute_under_partnership_modality: 20,
      institution_under_tecs_modality: 534,
      institute_under_private_modality: 429,
    },
    source: 'www.ctevt.org.np (Fiscal year 2076/77)',
  },
  why_aakash_institute: {
    reasons: [
      {
        title: 'Experienced Faculty',
        description: 'Get tutored by knowledgeable and professional trainers who make the lessons understandable.',
      },
      {
        title: 'Comprehensive Curriculum',
        description: 'Here all imperative issues and topics connected with exams are included in our course.',
      },
      {
        title: 'Personalized Learning',
        description:
          'We pay attention to the abilities and failings of each learner and assist you to the best of our capabilities.',
      },
      {
        title: 'Exam Preparation',
        description:
          'We offer sample papers, dummy papers, tips, and techniques to help students prepare for the entrance exam and their future learning.',
      },
    ],
  },
  website: 'www.ctevt.org.np',
};

const AakashInstitute = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: `url('/hero.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-6 py-32 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold">{data.institution}</h1>
          <p className="mb-12 text-xl">{data.description}</p>
          <a
            href="#courses"
            className="rounded-full bg-blue-500 px-6 py-3 text-lg text-white transition duration-300 hover:bg-blue-600"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-12 text-4xl font-semibold text-gray-800">Courses Offered</h2>
          <div className="space-y-16">
            {data.courses.categories.map((category, index) => (
              <div key={index} className="mb-12">
                <h3 className="mb-6 text-3xl font-bold text-gray-700">{category.category}</h3>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {category.programs.map((program, i) => (
                    <div
                      key={i}
                      className="group relative rounded-lg bg-white shadow-lg transition-all hover:scale-105"
                    >
                      <img
                        src={'/hero.jpg'}
                        alt={category.category}
                        className="h-56 w-full rounded-t-lg object-cover transition-all group-hover:opacity-80"
                      />
                      <div className="p-6">
                        <h4 className="mb-4 text-xl font-semibold text-gray-800">{program}</h4>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {/* You can add more details about the program if necessary */}
                          Detailed program information goes here.
                        </p>
                      </div>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black opacity-0 transition-all group-hover:opacity-60"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aakash Institute Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8 text-3xl font-semibold">Why Choose Aakash Institute?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.why_aakash_institute.reasons.map((reason, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTEVT Institutions Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-12 text-4xl font-semibold text-gray-800">CTEVT Institutions</h2>
          <div className="mx-auto max-w-4xl space-y-8 text-left">
            {/* Central and Provincial Offices */}
            <div className="space-y-4">
              <p className="text-xl font-medium text-gray-700">
                <span className="font-semibold text-gray-800">Central Office:</span>{' '}
                {data.ctevt_institutions.central_office}
              </p>
              <p className="text-xl font-medium text-gray-700">
                <span className="font-semibold text-gray-800">Provincial Offices:</span>{' '}
                {data.ctevt_institutions.provincial_offices}
              </p>
            </div>

            {/* Affiliated Institutions */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-800">Affiliated Institutions</h4>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Constituent Institutes */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h5 className="mb-2 text-lg font-semibold text-gray-800">Constituent Institutes</h5>
                  <p className="text-gray-600">
                    {data.ctevt_institutions.affiliated_institutions.constituent_institute}
                  </p>
                </div>

                {/* Partnership Modality */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h5 className="mb-2 text-lg font-semibold text-gray-800">Partnership Modality</h5>
                  <p className="text-gray-600">
                    {data.ctevt_institutions.affiliated_institutions.institute_under_partnership_modality}
                  </p>
                </div>

                {/* TECS Modality */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h5 className="mb-2 text-lg font-semibold text-gray-800">TECS Modality</h5>
                  <p className="text-gray-600">
                    {data.ctevt_institutions.affiliated_institutions.institution_under_tecs_modality}
                  </p>
                </div>

                {/* Private Modality */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h5 className="mb-2 text-lg font-semibold text-gray-800">Private Modality</h5>
                  <p className="text-gray-600">
                    {data.ctevt_institutions.affiliated_institutions.institute_under_private_modality}
                  </p>
                </div>
              </div>
            </div>

            {/* Source */}
            <p className="mt-6 text-lg text-gray-600">
              <span className="font-semibold text-gray-800">Source:</span> {data.ctevt_institutions.source}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AakashInstitute;
