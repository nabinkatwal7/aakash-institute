import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { reviews } from '@/data/reviews';

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden px-6 py-12 lg:px-24">
      <h2 className="mb-6 text-3xl font-semibold text-gray-800">Hear from Those We&lsquo;ve Helped</h2>
      <p className="text-lg leading-relaxed text-gray-600">
        Don&lsquo;t just take our word for it. See what our clients have to say about us.
      </p>
      <InfiniteMovingCards items={reviews} speed="normal" />
    </div>
  );
};

export default Reviews;
