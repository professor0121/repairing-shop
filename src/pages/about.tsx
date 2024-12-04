import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        Welcome to <span className="font-semibold">[Your Business Name]</span>, your trusted partner in electronics repair and maintenance services. We are a dedicated team of experts specializing in the repair and servicing of air conditioners, refrigerators, and other household electronics. With years of experience in the industry, our mission is to provide exceptional, reliable, and affordable repair services to ensure that your home appliances are always functioning at their best.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
      <p className="text-lg text-gray-700 mb-4">
        At <span className="font-semibold">[Your Business Name]</span>, we believe in offering more than just repairs. We are committed to delivering an outstanding customer experience from start to finish. Whether it’s a malfunctioning AC unit, a refrigerator that isn’t cooling properly, or any other electronic issue, we have the tools, skills, and experience to fix it efficiently.
      </p>
      
      <ul className="space-y-4 mb-6">
        <li className="flex items-center">
          <span className="mr-2 text-green-500">&#10003;</span>
          <span className="text-lg text-gray-700">Expert Technicians: Our technicians are highly skilled and trained to work with all major brands and types of household electronics. With expertise in diagnostics and repairs, they can quickly identify and resolve any issue.</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-500">&#10003;</span>
          <span className="text-lg text-gray-700">Affordable Services: We offer competitive pricing without compromising on the quality of our work. We aim to provide the best possible service at a price that’s fair for you.</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-500">&#10003;</span>
          <span className="text-lg text-gray-700">Fast & Reliable: We understand that when your appliances stop working, it can be disruptive. That's why we prioritize quick turnaround times, without sacrificing the quality of repairs.</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-500">&#10003;</span>
          <span className="text-lg text-gray-700">Customer Satisfaction: Your satisfaction is our priority. From the moment you contact us to the completion of the repair, we ensure clear communication, transparency, and quality service.</span>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
      <ul className="space-y-4 mb-6">
        <li className="text-lg text-gray-700">
          <span className="font-semibold">Air Conditioner Repair & Maintenance:</span> Keep your cool during the summer with our expert AC repair and maintenance services. We fix all types of air conditioning units to ensure optimal performance.
        </li>
        <li className="text-lg text-gray-700">
          <span className="font-semibold">Refrigerator Repair & Maintenance:</span> A malfunctioning refrigerator can lead to spoilage and a lot of wasted food. Our technicians ensure that your fridge is cooling properly and running efficiently.
        </li>
        <li className="text-lg text-gray-700">
          <span className="font-semibold">Electronics Repair:</span> From microwaves to washing machines, we repair a wide range of home electronics. We troubleshoot problems and provide efficient fixes for many different appliances.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our goal is simple – to provide fast, reliable, and affordable repairs that exceed your expectations. We strive to create long-lasting relationships with our clients by offering high-quality service that you can trust. At <span className="font-semibold">[Your Business Name]</span>, we want you to feel confident that your electronics are in good hands.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-6">
        If you need professional repairs for your appliances or electronics, don’t hesitate to contact us. Our friendly customer support team is here to help you schedule an appointment or answer any questions you may have.
      </p>

      <p className="text-lg text-gray-700">
        Thank you for choosing <span className="font-semibold">[Your Business Name]</span> – we look forward to serving you!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
