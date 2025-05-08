import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";

import MonitorSection from "./components/MonitorSection";

import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px]  rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <PurposeSection />
        <FeaturesSection />
        <MonitorSection />
        <ServicesSection />
        <TestimonialsSection />
        <Contact />
        <ChatWidget/>
        <Footer />
      </div>
    </main>
  );
}

export default App;
