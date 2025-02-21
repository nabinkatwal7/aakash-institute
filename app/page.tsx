import Classes from '@/components/Home/Classes';
import Countries from '@/components/Home/Countries';
import Courses from '@/components/Home/Courses';
import CTA from '@/components/Home/CTA';
import Description from '@/components/Home/Description';
import Hero from '@/components/Home/Hero';
import Languages from '@/components/Home/Languages';
import Promotional from '@/components/Home/Promotional';
import Reviews from '@/components/Home/Reviews';
import VideoSection from '@/components/Home/VideoSection';
import WhyUs from '@/components/Home/WhyUs';

export default function Home() {
  return (
    <div className="flex w-screen flex-col gap-2 overflow-x-hidden">
      <Hero />
      <Description />
      <VideoSection />
      <Countries />
      <Classes />
      <Courses />
      <Languages />
      <Promotional />
      <WhyUs />
      <CTA />
      <Reviews />
    </div>
  );
}
