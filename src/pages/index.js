import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Articles />
      <Testimonials />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
