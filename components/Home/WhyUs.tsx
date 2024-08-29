'use client';
import React, { useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const points = [
    'Expert Guidance from Industry Professionals',
    'Tailored Solutions for Every Client',
    'Proven Track Record of Success',
    'Comprehensive Support Throughout Your Journey',
    'Access to a Global Network of Opportunities',
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="bg-white px-6 py-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {points.map((point, index) => (
            <div key={index} className="flex items-start">
              <FaCheckCircle className="mr-4 size-6 text-[#e37712]" />
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
