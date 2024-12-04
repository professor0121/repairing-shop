import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const ServicesPage = () => {
    return (
        <>
        <Header/>
            <div className="bg-gray-50 py-10">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                        Our Services
                    </h1>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AC Repair and Maintenance</h2>
                            <p className="text-gray-600">
                                Stay cool with our top-notch AC repair and maintenance services.
                                We ensure your AC performs efficiently throughout the year.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fridge Repair</h2>
                            <p className="text-gray-600">
                                We specialize in fixing cooling issues, compressor problems, and
                                other fridge-related repairs to keep your food fresh.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Electronics Repair</h2>
                            <p className="text-gray-600">
                                TVs, washing machines, microwaves, and more – we repair all
                                electronics with expert care and precision.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Installation Services</h2>
                            <p className="text-gray-600">
                                Get hassle-free installation of your ACs, refrigerators, and
                                other appliances with our professional service.
                            </p>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Annual Maintenance Contracts</h2>
                            <p className="text-gray-600">
                                Ensure your appliances run smoothly all year long with our
                                comprehensive annual maintenance plans.
                            </p>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Repair Services</h2>
                            <p className="text-gray-600">
                                We offer quick and reliable emergency repair services to address
                                urgent issues with your appliances.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-blue-600 text-white text-center rounded-lg mt-12 p-6">
                        <h3 className="text-2xl font-semibold mb-2">
                            Need Immediate Assistance?
                        </h3>
                        <p className="text-white/80 mb-4">
                            Call us now at <span className="font-bold">+1 (234) 567-890</span>{" "}
                            for emergency repairs and support.
                        </p>
                        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ServicesPage;
