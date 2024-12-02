import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-6">
        {/* Footer Left: Shop Information */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">ElectrISH</h2>
          <p className="text-sm mt-2">
            Reliable and professional repair services for all your electronic needs.
          </p>
        </div>

        {/* Footer Center: Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Right: Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm mt-2">
            📞 Phone: <a href="tel:+123456789" className="hover:text-blue-400">+123 456 789</a>
          </p>
          <p className="text-sm">
            📧 Email: <a href="mailto:info@repairshop.com" className="hover:text-blue-400">info@repairshop.com</a>
          </p>
          <p className="text-sm">
            📍 Address: Main Street, Repair City
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-700 mt-4 pt-4 text-sm">
        © {new Date().getFullYear()} ElectrISH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
