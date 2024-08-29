import Countries from '@/components/Home/Countries';
import CTA from '@/components/Home/CTA';
import Description from '@/components/Home/Description';
import Hero from '@/components/Home/Hero';
import Promotional from '@/components/Home/Promotional';
import Reviews from '@/components/Home/Reviews';
import WhyUs from '@/components/Home/WhyUs';

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Hero />
      <Description />
      <Countries />
      <Promotional />
      <WhyUs />
      <CTA />
      <Reviews />
    </div>
  );
}
