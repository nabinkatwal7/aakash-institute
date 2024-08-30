import React from 'react';
import CountryCard from '../ui/CountryCard';
import { entranceData } from '@/data/entrance';

const Courses = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6 py-12 lg:px-24">
      <h2 className="mb-6 text-3xl font-semibold text-gray-800">Classes We Offer</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {entranceData.map((item) => (
          <CountryCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
