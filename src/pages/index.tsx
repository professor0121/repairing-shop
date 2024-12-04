import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import SwiperSlider from "@/components/SwiperSlider";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only set to true on the client side
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Return loading state for SSR
  }

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <SwiperSlider />
        <Services />
        <AboutUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
