import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Importance of Regular AC Maintenance",
    image: "https://source.unsplash.com/1600x900/?air-conditioner",
    content: "Regular AC maintenance is crucial for ensuring your air conditioner operates at peak efficiency. By scheduling yearly check-ups, you can identify any potential issues before they become costly repairs. Routine cleaning of filters, coils, and ductwork not only improves airflow but also prolongs the lifespan of your AC system. Investing in professional maintenance can save you money in the long run by avoiding expensive repairs and increasing energy efficiency."
  },
  {
    id: 2,
    title: "How to Fix Common Refrigerator Issues",
    image: "https://source.unsplash.com/1600x900/?refrigerator",
    content: "A refrigerator is an essential appliance in any household, and when it breaks down, it can cause inconvenience and spoilage of food. Common refrigerator issues include temperature fluctuations, excessive noise, and water leakage. Often, the problem can be traced to faulty thermostats, clogged vents, or dirty condenser coils. Regular cleaning and checking the seals on the door can help prevent most issues. If the problem persists, consulting a professional technician is advisable."
  },
  {
    id: 3,
    title: "Understanding the Basics of Electronics Repair",
    image: "https://source.unsplash.com/1600x900/?electronics",
    content: "Electronics repair is a valuable skill, and understanding the basics can save you time and money. Common issues such as broken screens, dead batteries, and malfunctioning circuits can often be fixed with the right tools and knowledge. However, electronics repair requires precision and safety, as working with electrical components can be hazardous. For complex issues, it's always best to seek help from a professional technician who has experience with the specific device or appliance."
  },
  {
    id: 4,
    title: "Why Your Air Conditioner Needs a Professional Inspection",
    image: "https://source.unsplash.com/1600x900/?air-conditioning",
    content: "Air conditioners can accumulate dust, dirt, and debris over time, leading to reduced efficiency and potential breakdowns. A professional inspection ensures that all components, such as the condenser, compressor, and refrigerant levels, are working as they should. During an inspection, the technician will also check for any leaks, clean the filters, and make necessary adjustments. Regular professional inspections can extend the life of your AC and improve its performance, keeping you cool during hot weather."
  },
  {
    id: 5,
    title: "Common Problems with Home Electronics and How to Fix Them",
    image: "https://source.unsplash.com/1600x900/?electronics-repair",
    content: "Home electronics, such as TVs, microwaves, and washing machines, are prone to certain issues over time. Some common problems include unresponsive remotes, poor image quality, and malfunctioning buttons. Many of these issues can be resolved by resetting the device, checking for loose connections, or replacing worn-out components. If the issue persists, professional repair services may be necessary. Understanding basic troubleshooting steps can help you address minor issues before seeking external help."
  },
  {
    id: 6,
    title: "How to Save Energy with Your Electronics",
    image: "https://source.unsplash.com/1600x900/?energy-saving",
    content: "With the rising costs of electricity, finding ways to save energy with your electronics is essential. Simple steps such as turning off appliances when not in use, using energy-efficient devices, and opting for LED bulbs can significantly reduce your energy consumption. Additionally, using surge protectors and maintaining your electronics by cleaning dust from vents can help them run more efficiently. Regular servicing and upgrading to newer, energy-efficient models can also help lower your overall energy bill."
  }
];

const BlogComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest Blogs on Electronics and Repairs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-base">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
