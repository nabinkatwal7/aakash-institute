// import Image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookReader, FaFacebookSquare, FaPhoneAlt, FaPlaneDeparture } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { GiCryptEntrance } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col p-4 lg:flex-row lg:justify-around">
        <div className="flex flex-col gap-4">
          <Image src="/logo.png" alt="logo" width={200} height={200} className="w-40" />
          {/* <p>logo</p> */}
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold">Aakash Institute Pvt. Ltd.</p>
            <p>नेपाल सरकार, शिक्षा मन्त्रालय बाट स्विकृति प्राप्त संस्था</p>
            <div className="flex flex-row items-center gap-2">
              <FaPhoneAlt />
              <p>025-588810/ 586565, 9852065144</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MdEmail />
              <p>aakashedu.itahari@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaLocationCrosshairs />
              <p>Itahari-6, Sunsari, Next to Gorkha Department Store, Dharan Road</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <FaBookReader />
              <p className="text-lg font-bold">Language Courses and Test Preparation</p>
            </div>
            <ul className="px-4">
              <li>Japanese Language</li>
              <li>IELTS/PTE</li>
              <li>English Language Class</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <GiCryptEntrance />
              <p className="text-lg font-bold">Entrance Preparation</p>
            </div>
            <ul className="px-4">
              <li>Bridge Course [Science, Management]</li>
              <li>CMAT</li>
              <li>Common Entrance Examination [CEE]</li>
              <li>Bachelor in Engineering[BE]/Bsc. CSIT</li>
              <li>CTEVT</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <SiGoogleclassroom />
              <p className="text-lg font-bold">Computer Classes</p>
            </div>
            <ul className="px-4">
              <li>Diploma in Information Technology</li>
              <li>Diploma in Computer Application [Accounting Package]</li>
              <li>Graphic Designing</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <FaPlaneDeparture />
              <p className="text-lg font-bold">Abroad Studies</p>
            </div>
            <ul className="px-4">
              <li>Japan</li>
              <li>Australia</li>
              <li>UK</li>
              <li>Canada</li>
              <li>India</li>
            </ul>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Connect with us at:</p>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <p className="text-center">© {new Date().getFullYear()} Aakash Institute</p>
      </div>
    </div>
  );
};

export default Footer;
