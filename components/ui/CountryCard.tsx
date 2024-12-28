import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CountryCard = ({ data }: { data: any }) => {
  return (
    <Link href={'/countries/' + data.link} className="flex flex-col gap-4 rounded-lg border p-4 shadow-xl">
      <div className="overflow-hidden">
        <Image
          src={data.image}
          alt="country"
          width={800}
          height={800}
          className="h-[250px] w-full rounded-lg object-cover transition-all duration-300 hover:scale-110"
        />
      </div>
      <div>
        <p>{data.name}</p>
      </div>
      <div>{data.description}</div>
      {/* <div>link</div> */}
    </Link>
  );
};

export default CountryCard;
