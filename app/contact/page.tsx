import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookSquare } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <section className="p-4 lg:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-orange-700">Contact Us</h2>
          <p className="mt-4 text-lg text-orange-600">
            We are here to assist you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="cols-1 mb-12 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {/* Address Section */}
          <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-white p-6 text-gray-800 shadow">
            <FaMapMarkerAlt className="mx-auto  text-3xl text-orange-500" />
            <h3 className=" text-2xl font-semibold">Visit Us</h3>
            <p>Aakash Institute Pvt. Ltd.</p>
            <p>नेपाल सरकार, शिक्षा मन्त्रालय बाट स्विकृति प्राप्त संस्था</p>
            <p>Itahari-6, Sunsari. Next to Gorkha Department Store, Dharan Road</p>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center justify-center  gap-1 rounded-lg bg-white p-6 text-gray-800 shadow">
            <FaPhoneAlt className="mx-auto  text-3xl text-orange-500" />
            <h3 className=" text-2xl font-semibold">Call Us</h3>
            <p>025-588810 / 586565</p>
            <p className="">9852065144</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-white p-6 text-gray-800 shadow">
            <FaEnvelope className="mx-auto  text-3xl text-orange-500" />
            <h3 className=" text-2xl font-semibold">Email Us</h3>
            <p>aakashedu.itahari@gmail.com</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-white p-6 text-gray-800 shadow">
            <IoShareSocial className="mx-auto  text-3xl text-orange-500" />
            <h3 className=" text-2xl font-semibold">Our Socials</h3>
            <div className="flex flex-row items-center gap-2">
              <Link href="https://facebook.com">
                <FaFacebookSquare className="text-xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:px-6">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <iframe
              title="Aakash Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14271.469484214566!2d87.27489531156921!3d26.67692079901306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74574f2e3f91%3A0x1d95bfe247eeec3f!2sGorkha%20Department%20Store%2C%20Dharan%20Rd%2C%20Itahari%2047736!5e0!3m2!1sen!2snp!4v1693409936635!5m2!1sen!2snp"
              width="100%"
              height="400"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
