import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch the About Us data from the about.json file
    const fetchAboutData = async () => {
      const response = await fetch('/about.json');
      const data = await response.json();
      setAboutData(data);
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          {aboutData.title}
        </h2>
        <p className="text-gray-600 text-center mb-6">{aboutData.description}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-gray-600 text-center mb-8">{aboutData.mission}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-gray-600 text-center mb-8">{aboutData.vision}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.team.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.position}</p>
              <p className="text-gray-600 mt-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
