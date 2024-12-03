import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import SwiperSlider from "@/components/SwiperSlider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

 
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">Welcome to our shop!</h1>
        <p className="mt-4">We provide the best repair services for ACs, fridges, and electronics.</p>
      </main>
      <SwiperSlider/>
      <Services /> 
      <AboutUs/>
      <Footer />
    </div>
  );
}


