import { countries } from '@/data/countries';
import React from 'react';
import CountryCard from '../ui/CountryCard';

const Countries = () => {
  return (
    <div className="mx-auto flex max-w-[1350px] flex-col items-center justify-center gap-4 px-6 py-12 lg:px-24">
      <h2 className="mb-6 text-3xl font-semibold text-gray-800">We Are Your Gateway To</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {countries.map((item) => (
          <CountryCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
