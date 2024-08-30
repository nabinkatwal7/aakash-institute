import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  const members = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      image: '/dummy.jpg', // Replace with the actual image source
      description:
        'John is a visionary leader with over 20 years of experience in consultancy and education. He founded our institute with a mission to empower individuals and organizations.',
    },
    {
      name: 'Jane Smith',
      position: 'Chief Operating Officer',
      image: '/dummy.jpg', // Replace with the actual image source
      description:
        'Jane oversees the daily operations, ensuring that we deliver quality services to our clients and students. She has a background in business management and strategic planning.',
    },
    {
      name: 'Michael Brown',
      position: 'Head of Training & Development',
      image: '/dummy.jpg', // Replace with the actual image source
      description:
        'Michael is responsible for developing and implementing our educational programs. With a passion for teaching, he has helped shape the careers of countless professionals.',
    },
    // Add more members as needed
  ];

  return (
    <section className="p-4 lg:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a premier institute and consultancy firm dedicated to fostering excellence through education,
            training, and strategic advisory services.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap items-center">
          <div className="mb-12 w-full md:mb-0 md:w-1/2">
            <Image
              src="/hero.jpg"
              width={800}
              height={800}
              alt="About Us"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is to empower individuals and organizations by providing top-tier educational resources,
              expert consultancy services, and innovative solutions that drive success and growth.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              We envision a world where knowledge and strategic insight lead to impactful changes, creating value for
              businesses and communities alike.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Integrity, innovation, and a commitment to excellence are the core values that guide us in everything we
              do.
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the professionals who make our institute and consultancy a trusted name in the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {members.map((member, index) => (
            <div key={index} className=" w-full">
              <div className="rounded-lg bg-white p-6 text-center shadow-lg">
                <Image
                  width={200}
                  height={200}
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-4 size-32 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
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
