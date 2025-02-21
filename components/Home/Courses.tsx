import { entranceData } from '@/data/entrance';
import Image from 'next/image';
import Link from 'next/link';

const Courses = () => {
  return (
    <div className="mx-auto flex max-w-[1350px] flex-col items-center justify-center gap-4 px-6 py-12 lg:px-24">
      <h2 className="mb-6 text-3xl font-semibold text-gray-800">Classes We Offer</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {entranceData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

const Card = ({ data }: any) => {
  return (
    <Link href={'/courses/' + data.link} className="flex flex-col gap-4 rounded-lg border p-4 shadow-xl">
      <div className="overflow-hidden">
        <Image
          src={data.image}
          alt="country"
          width={800}
          height={800}
          className="h-[250px] w-full rounded-lg object-contain transition-all duration-300 hover:scale-110"
        />
      </div>
      <div>
        <p>{data.title}</p>
      </div>
    </Link>
  );
};
