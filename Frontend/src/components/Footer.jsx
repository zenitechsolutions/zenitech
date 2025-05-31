import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About & Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4"><span className="text-orange-600">Zenitech</span><span className="text-blue-600"> Solutions</span></h2>
          <p className="text-gray-300 mb-6">
            Empowering businesses with cutting-edge technology solutions and expert in complete IT services to drive digital transformation and secure your future.
          </p>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/zenitechsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><FaFacebookF /></a>
            <a href="https://twitter.com/zenitechsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/zenitechsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/zenitech-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="/" className="hover:text-orange-400">Founder Profile</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="/services" className="hover:text-orange-400">Services</a></li>
              <li><a href="/partners" className="hover:text-orange-400">Partners</a></li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services/cloud-computing" className="hover:text-orange-400">Cloud Computing</a></li>
              <li><a href="/services/cybersecurity" className="hover:text-orange-400">Cybersecurity</a></li>
              <li><a href="/services/software-licensing" className="hover:text-orange-400">Software License</a></li>
              <li><a href="/services/software-development" className="hover:text-orange-400">Software Development</a></li>
              <li><a href="/services/it-services" className="hover:text-orange-400">IT Services</a></li>
              <li><a href="/services/telecom-services" className="hover:text-orange-400">Telecom Services</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <HiOutlineLocationMarker className="mt-1 text-xl mr-2" />
              <a
                href="https://www.google.com/maps?q=Dex+Co+Work,+2nd+Floor,+1383/433,+HBR+Layout,+Bangalore+-+560045,+India"
                target="_blank" rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bangaluru - 560045, India.
              </a>
            </li>
            <li className="flex items-start">
              <HiOutlineLocationMarker className="mt-1 text-xl mr-2" />
              <a
                href="https://www.google.com/maps?q=Sunny+Seasons,+15/1C,+Kamalgazi,+P.O.+Narendrapur,+Kolkata,+West+Bengal+700103,+IN"
                target="_blank" rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                Sunny Seasons, 15/1C , Kamalgazi, Kolkata, 700103 , India.
              </a>
            </li>
            <li className="flex items-center">
              <HiOutlineMail className="text-xl mr-2" />
              <a href="mailto:info@zenitech.in" className="hover:text-orange-400">info@zenitech.in</a>
            </li>
            <li className="flex items-center">
              <HiOutlinePhone className="text-xl mr-2" />
              <a href="tel:+918820066999" className="hover:text-orange-400">+91 88200 66999</a>
            </li>
            <li className="flex items-center">
              <HiOutlinePhone className="text-xl mr-2" />
              <a href="tel:+917439004545" className="hover:text-orange-400">+91 74390 04545</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-gray-50 py-4 px-4 text-sm flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">
          © <span className="text-orange-400 font-semibold">Zenitech</span><span className="text-blue-400 font-semibold"> Solutions</span>, All rights reserved.
        </p>
        <p className="text-center md:text-right mt-2 md:mt-0">
          Designed by <a href="https://www.linkedin.com/in/sayan-das-b99810213/" className="text-orange-400 hover:underline">Sayan Das</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
