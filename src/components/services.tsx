import React, { useEffect, useState } from 'react';
import { FaSnowflake, FaTools, FaTv, FaHome, FaPlug, FaHeadphones } from 'react-icons/fa';

const services  = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from the services.json file
    const fetchServices = async () => {
      const response = await fetch('/services.json');
      const data = await response.json();
      setServices(data);
    };

    fetchServices();
  }, []);

  const iconMap = {
    FaSnowflake: <FaSnowflake className="text-blue-500 text-5xl mx-auto" />,
    FaTools: <FaTools className="text-green-500 text-5xl mx-auto" />,
    FaTv: <FaTv className="text-purple-500 text-5xl mx-auto" />,
    FaHome: <FaHome className="text-orange-500 text-5xl mx-auto" />,
    FaPlug: <FaPlug className="text-red-500 text-5xl mx-auto" />,
    FaHeadphones: <FaHeadphones className="text-yellow-500 text-5xl mx-auto" />
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {iconMap[service.icon]}
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default services ;
    