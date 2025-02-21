import Image from 'next/image';

const AboutUs = () => {
  const members = [
    {
      description:
        ' To provide proper guidance to the students for the application processes, documentation, visa lodgment, travel arrangements and many more.',
    },
    {
      description: 'To increase the volume of the student’s visa rate for the year 2017.',
    },
    {
      description: 'To reduce the visa refusal rate for the students who have applied to Study Abroad.',
    },
    {
      description: 'To extend business activities in other countries for the study purpose.',
    },
    {
      description:
        'To make all the students, teachers, parents, visitors, agents, subagents and staff satisfied and its contribution in all aspects as per the expectation',
    },
    {
      description: ' To make sufficient resources available and provide within after its realization',
    },
    {
      description:
        ' To make an official working system computerized for a smooth and transparent record-keeping system',
    },
  ];

  return (
    <section className="p-4 lg:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            In a span of 17 years, we are in a position to proclaim our selves as one of the best institutes for
            Education Consultancy in Nepal. We promise students the most study-friendly and congenial environment with
            state-of-the-art facilities for STUDY ABROAD, TEST PREPARATION, ENTRANCE PREPARATION AND BRIDGECOURSES
          </p>
        </div>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600">
            Aakash Institute is the pioneer education institute in the Eastern region of Nepal, established in 2009. As
            a premier educational institute, it meets all the necessary academic and management standards to meet
            modern-day challenges. AakashInstitute, since its inception at Itahari, has established itself as an
            education hub in the eastern region.It is the pioneer in the sector of providing diverse educational
            services like Bridge courses after SEE, Entrance Preparation of CTEVT, NURSING, ENGINEERING, MEDICAL,
            PARAMEDICAL, APPLIED SCIENCE, CMAT/KUUMAT & Abroad Study for JAPAN, S.KOREA, AUSTRALIA, U.K., CANADA & USA.
            Moreover, with a decade-long experience and research of the market, we have geared up for yet another
            landmark in the education sector. The key to success, however, is the highest level of preparation and that
            is what AAKASH INSTITUTE has been striving to achieve. Here at AAKASH INSTITUTE, we prepare students to the
            fullest and leave nothing to luck. Weequip them with all sorts of ornaments they need to face the battle.
            With the best possible qualified counsellors, faculty, staff and state-of-the-art facilities, we are now an
            indomitable force in the arena of Educational Consultancy. Here, you will find the energy and innovation of
            a young team coalesced with the experience and expertise of the most revered counsellors, instructors and
            senior management
          </p>
        </div>

        {/* our vision mission and values */}
        <div className="mb-12 flex flex-wrap items-center">
          <div className="mb-12 w-full md:mb-0 md:w-1/2">
            <Image
              src="/images/mission.jpg"
              width={800}
              height={800}
              alt="About Us"
              className="max-h-[500px] w-full rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Aakash Institute is a leading educational institution in the South Asian Region, recognized by the
              Government of Nepal&apos;s Ministry of Education. The institute specializes in comprehensive educational
              services including language courses (IELTS, PTE, Japanese, and English), entrance exam preparation (CMAT,
              Science and Management Bridge Course, Common Entrance Examination), abroad study consulting for multiple
              countries (USA, UK, Canada, Australia, Japan, S.Korea), and computer/IT training programs. With a
              commitment to quality education and student success, Aakash Institute provides personalized support
              through experienced professionals, maintaining high visa success rates and excellent placement records in
              world-class institutions. The institute&apos;s mission encompasses industry leadership, employee growth,
              and social responsibility, while focusing on diversity and market research in Nepal.
            </p>
          </div>
        </div>
        <div className="mb-12 flex flex-wrap-reverse items-center">
          <div className="mb-12 w-full md:mb-0 md:w-1/2">
            <Image
              src="/images/vision.jpg"
              width={800}
              height={800}
              alt="About Us"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              Aakash Institute envisions serving the educational sector and nation through strategic investments in
              quality and diverse educational opportunities for students. The institute is committed to maintaining
              profitable growth while enhancing its intellectual property value and creating rewarding career paths for
              employees. Additionally, Aakash Institute acknowledges its role in society by actively embracing corporate
              social responsibility and positioning itself as a central educational institution in the community
              structure.
            </p>
          </div>
        </div>
        <div className="mb-12 flex flex-wrap items-center">
          <div className="mb-12 w-full md:mb-0 md:w-1/2">
            <Image
              src="/images/purpose.jpg"
              width={800}
              height={800}
              alt="About Us"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Purpose</h3>
            <p className="mt-4 text-gray-600">
              True to our vision, we aim at remaining synonymous with any force that looks at “accessing knowledge”
              through diversity, optimizing study options to suit every student&apos;s need, setting a benchmark for
              quality control and delivering any corporate social responsibility in the education industry
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Quality Policy</h2>
          <p className="mt-4 text-lg text-gray-600">
            The continuing Policy of Aakash Institute is to provide a high-quality, professional and efficient service
            to ensure the satisfaction of all of the requirements of our clients. This achievement will result in
            securing efficiency, a strong customer focus and enhancement of long-term sustainability and profitability
            within the Organization. The Management Team will show leadership and commitment, and bear the
            responsibility for establishing, implementing, integrating and maintaining the Quality Management System.
            Weundertake to ensure sufficient resources are made available within the Organization to achieve this. We
            undertake to ensure through communication, engagement, practical example and training that Quality is the
            aim of all members of the Organization. Through direction and support, each employee will have a proper
            understanding of the importance of the Quality System function, their responsibility to contribute to its
            effectiveness, and its direct relevance to the success of the Organization. Equally, every employee is
            responsible for and will be trained to perform the duties required by his or her specific role.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {members.map((member, index) => (
            <div key={index} className="w-full ">
              <div className="min-h-[150px] rounded-lg bg-white p-6 text-center shadow-lg">
                <p className="mt-4 text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
